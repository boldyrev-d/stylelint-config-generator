<h1 align="center">Stylelint Config Generator</h1>

<div align="center">
  <a href="https://travis-ci.org/boldyrev-d/stylelint-config-generator">
    <img src="https://travis-ci.org/boldyrev-d/stylelint-config-generator.svg?branch=master" alt="Build Status"/>
  </a>

  <a href="https://david-dm.org/boldyrev-d/stylelint-config-generator">
    <img src="https://david-dm.org/boldyrev-d/stylelint-config-generator/status.svg" alt="Dependency Status"/>
  </a>

  <a href="https://david-dm.org/boldyrev-d/stylelint-config-generator?type=dev">
    <img src="https://david-dm.org/boldyrev-d/stylelint-config-generator/dev-status.svg" alt="devDependency Status"/>
  </a>
</div>

<hr>

Application for generation [stylelint](https://stylelint.io/) config file.

Project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app):

* Based on React/Redux
* For style used styled-components
* Linting with ESLint (Airbnb config)
* Formatting with prettier
* Automatic deploy on now.sh by travis-ci

At the moment the following rules are added:

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
