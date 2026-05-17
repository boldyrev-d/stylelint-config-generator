<h1 align="center">Stylelint Config Generator</h1>

This generator builds a custom Stylelint config tailored to your preferences, extending [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) as a sensible baseline. Pick the variant you prefer for each rule, then drop the generated object into `stylelint.config.js`. See the [docs](https://stylelint.io/user-guide/configure) for the full rule reference.

[Open the app](https://stylelint-config-generator.netlify.app/)

## Supported Rules

* [color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)
* [font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/)
* [function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/)
* [function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)
* [unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown/)
* [shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/)
* [property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown/)
* [keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/)
* [declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/)
* [declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/)
* [declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/)
* [block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty/)
* [selector-pseudo-class-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/)
* [selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/)
* [selector-type-no-unknown](https://stylelint.io/user-guide/rules/selector-type-no-unknown/)
* [media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/)
* [at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown/)
* [comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty/)
* [max-nesting-depth](https://stylelint.io/user-guide/rules/max-nesting-depth/)
* [no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity/)
* [no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors/)
* [no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source/)
* [no-extra-semicolons](https://stylelint.io/user-guide/rules/no-extra-semicolons/)
* [no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/)
* [no-unknown-animations](https://stylelint.io/user-guide/rules/no-unknown-animations/)

## Development

* `npm run dev` — start the dev server
* `npm run build` — typecheck and produce a production build in `build/`
* `npm run preview` — serve the production build locally
