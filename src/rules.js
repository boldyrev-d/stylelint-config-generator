export default [
  {
    id: 'color-no-invalid-hex',
    hint:
      'Longhand hex colors can be either 6 or 8 (with alpha channel) hexadecimal characters. And their shorthand variants are 3 and 4 characters respectively.',
    variants: [
      {
        hint: 'Disallow invalid hex colors.',
        invalidCode: 'a { color: <mark>#00</mark>; }\na { color: <mark>#12345aa</mark>; }',
        validCode: 'a { color: <mark>#000</mark>; }\na { color: <mark>#fff1a0</mark>; }',
        value: true,
      },
      {
        hint: 'Allow invalid hex colors.',
        validCode: 'a { color: <mark>#fff1az;</mark> }',
        value: false,
      },
    ],
  },
  {
    id: 'font-family-no-duplicate-names',
    variants: [
      {
        hint: 'Disallow duplicate font family names.',
        invalidCode: "a { font-family: 'Times', <mark>Times</mark>, serif; }",
        value: true,
      },
      {
        hint: 'Allow duplicate font family names.',
        validCode: 'a { font: 1em "Arial", <mark>\'Arial\'</mark>, sans-serif; }',
        value: false,
      },
    ],
  },
  {
    id: 'function-calc-no-unspaced-operator',
    hint:
      'Disallow an unspaced operator within calc functions. Before the operator, there must be a single whitespace or a newline plus indentation. After the operator, there must be a single whitespace or a newline.',
    variants: [
      {
        hint: 'Disallow an unspaced operator within calc functions.',
        invalidCode: 'a { top: calc(1px<mark>+ </mark>2px); }',
        validCode: 'a { top: calc(1px<mark> + </mark>2px); }',
        value: true,
      },
      {
        hint: 'Allow an unspaced operator within calc functions.',
        validCode: 'a { top: calc(1px+2px); }',
        value: false,
      },
    ],
  },
];
