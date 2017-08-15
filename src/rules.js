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
];
