export type RuleValue = boolean | number;

export interface Variant {
  hint: string;
  value: RuleValue;
  code?: string;
  invalidCode?: string;
  validCode?: string;
}

export interface Rule {
  id: string;
  hint?: string;
  variants: Variant[];
}

const sources = import.meta.glob<string>('./*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const rules: Rule[] = Object.entries(sources)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, source]) => parseRule(source, path));

export default rules;

function parseRule(source: string, path: string): Rule {
  const lines = source.replaceAll('\r\n', '\n').split('\n');

  if (lines[0] !== '---') {
    throw new Error(`${path}: expected frontmatter opening delimiter`);
  }

  const end = lines.indexOf('---', 1);
  if (end === -1) {
    throw new Error(`${path}: expected frontmatter closing delimiter`);
  }

  const frontmatter = parseFrontmatter(lines.slice(1, end), path);
  if (!frontmatter.id) {
    throw new Error(`${path}: expected frontmatter id`);
  }

  return {
    id: frontmatter.id,
    ...(frontmatter.hint ? { hint: mdInline(frontmatter.hint) } : {}),
    variants: parseVariants(lines.slice(end + 1).join('\n'), path),
  };
}

function parseFrontmatter(lines: string[], path: string): { id?: string; hint?: string } {
  const result: { id?: string; hint?: string } = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? '';

    if (line.startsWith('id: ')) {
      result.id = line.slice(4).trim();
      continue;
    }

    if (line.startsWith('hint: >')) {
      const hintLines: string[] = [];
      index += 1;

      while (index < lines.length) {
        const hintLine = lines[index] ?? '';

        if (!hintLine.startsWith('  ') && hintLine !== '') {
          break;
        }

        hintLines.push(hintLine.startsWith('  ') ? hintLine.slice(2) : '');
        index += 1;
      }

      index -= 1;
      result.hint = hintLines.join(' ').replaceAll(/\s+/g, ' ').trim();
      continue;
    }

    if (line.startsWith('hint: ')) {
      result.hint = line.slice(6).trim();
      continue;
    }

    if (line.trim() !== '') {
      throw new Error(`${path}: unsupported frontmatter line "${line}"`);
    }
  }

  return result;
}

function parseVariants(body: string, path: string): Variant[] {
  const matches = [...body.matchAll(/^## (.+)$/gm)];

  return matches.map((match, index) => {
    if (match.index === undefined) {
      throw new Error(`${path}: internal parser error: missing heading index`);
    }

    const next = matches[index + 1];
    const start = match.index + match[0].length;
    const end = next?.index ?? body.length;
    const content = body.slice(start, end).trim();
    const heading = match[1];

    if (!heading) {
      throw new Error(`${path}: internal parser error: missing heading text`);
    }

    const variant = parseHeading(heading, path);

    for (const block of parseCodeBlocks(content, path)) {
      if (block.label === 'Invalid') {
        variant.invalidCode = block.code;
      } else if (block.label === 'Valid') {
        variant.validCode = block.code;
      } else {
        variant.code = block.code;
      }
    }

    if (!variant.code && !variant.invalidCode && !variant.validCode) {
      throw new Error(`${path}: variant "${heading}" must contain a css code block`);
    }

    return variant;
  });
}

function parseHeading(heading: string, path: string): Variant {
  const separator = heading.includes(' — ') ? ' — ' : ' - ';
  const [rawValue, hint] = heading.split(separator);

  if (!rawValue || !hint) {
    throw new Error(`${path}: invalid variant heading "${heading}"`);
  }

  return {
    hint: hint.trim(),
    value: parseValue(rawValue.trim(), path),
  };
}

function parseValue(value: string, path: string): RuleValue {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (/^-?\d+$/.test(value)) {
    return Number.parseInt(value, 10);
  }

  throw new Error(`${path}: invalid variant value "${value}"`);
}

function parseCodeBlocks(content: string, path: string): { label?: 'Invalid' | 'Valid'; code: string }[] {
  const blocks: { label?: 'Invalid' | 'Valid'; code: string }[] = [];
  const pattern = /(?:(Invalid|Valid):\n)?```css\n([\s\S]*?)\n```/g;
  const fenceLines = content.match(/^```.*$/gm) ?? [];
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(content)) !== null) {
    const label = match[1] === 'Invalid' || match[1] === 'Valid' ? match[1] : undefined;
    blocks.push({ ...(label ? { label } : {}), code: match[2] ?? '' });
  }

  if (fenceLines.length !== blocks.length * 2 || fenceLines.some((line, index) => index % 2 === 0 && line !== '```css')) {
    throw new Error(`${path}: invalid css fence`);
  }

  return blocks;
}

function mdInline(markdown: string): string {
  return markdown.replace(
    /\[([^\]]+)]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  );
}
