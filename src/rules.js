export default [
  {
    id: 'color-no-invalid-hex',
    variants: [
      {
        hint: 'Disallow invalid hex colors.',
        code: 'a { color: <mark>#12345aa</mark>; }',
        value: true,
      },
      {
        hint: 'Allow invalid hex colors.',
        code: 'a { color: <mark>#00</mark>; }',
        value: false,
      },
    ],
  },
  {
    id: 'font-family-no-duplicate-names',
    variants: [
      {
        hint: 'Disallow duplicate font family names.',
        code: "a { font-family: 'Times', <mark>Times, serif; }",
        value: true,
      },
      {
        hint: 'Allow duplicate font family names.',
        code: 'a { font: 1em "Arial", <mark>\'Arial\'</mark>, sans-serif; }',
        value: false,
      },
    ],
  },
];
