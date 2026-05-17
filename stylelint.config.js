export default {
  rules: {},
  overrides: [
    {
      files: ['**/*.css'],
      extends: ['stylelint-config-standard'],
      rules: {
        'font-family-name-quotes': null,
      },
    },
    {
      files: ['**/*.{ts,tsx}'],
      customSyntax: 'postcss-styled-syntax',
      extends: ['stylelint-config-standard'],
      rules: {
        'alpha-value-notation': null,
        'color-function-alias-notation': null,
        'color-function-notation': null,
        'declaration-empty-line-before': null,
        'font-family-name-quotes': null,
        'media-feature-range-notation': null,
        'no-empty-source': null,
        'property-no-deprecated': null,
        'shorthand-property-no-redundant-values': null,
      },
    },
  ],
};
