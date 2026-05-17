---
id: no-empty-source
hint: Disallow empty sources. A source containing only whitespace is considered empty.
---

## true — Disallow empty sources.

Invalid:
```css
\t\t
```

Valid:
```css
a {}

/* Only comments */
```

## false — Allow empty sources.

Valid:
```css
\n
```
