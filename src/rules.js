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
  {
    id: 'function-linear-gradient-no-nonstandard-direction',
    hint:
      'Disallow direction values in linear-gradient() calls that are not valid according to the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax">standard syntax</a>.',
    variants: [
      {
        hint: 'Disallow direction values in linear-gradient() calls',
        invalidCode:
          '.foo { background: linear-gradient(<mark>top</mark>, #fff, #000); }\n.foo { background: linear-gradient(<mark>45</mark>, #fff, #000); }',
        validCode:
          '.foo { background: linear-gradient(<mark>to top</mark>, #fff, #000); }\n.foo { background: linear-gradient(<mark>45deg</mark>, #fff, #000); }',
        value: true,
      },
      {
        hint: 'Allow direction values in linear-gradient() calls',
        validCode: '.foo { background: linear-gradient(<mark>left</mark>, #fff, #000); }',
        value: false,
      },
    ],
  },
  {
    id: 'unit-no-unknown',
    variants: [
      {
        hint: 'Disallow unknown units.',
        invalidCode: 'a { width: 10<mark>pixels</mark>; }',
        validCode: 'a { width: 10<mark>px</mark>; }\na { width: 10<mark>Px</mark>; }',
        value: true,
      },
      {
        hint: 'Allow unknown units.',
        validCode: 'a { width: calc(10px + 10<mark>pixels</mark>); }',
        value: false,
      },
    ],
  },
  {
    id: 'shorthand-property-no-redundant-values',
    hint: 'This rule alerts you when you use redundant values in a shorthand properties.',
    variants: [
      {
        hint: 'Disallow redundant values in shorthand properties',
        invalidCode:
          'a { margin: 1px 1px; }\na { padding: 1px 1px 1px 1px; }\na { border-radius: 1px 2px 1px 2px; }',
        validCode: 'a { margin: 1px; }\na { margin: 1px 1px 1px 2px; }',
        value: true,
      },
      {
        hint: 'Allow redundant values in shorthand properties',
        validCode: 'a { -webkit-border-radius: 1px 1px 1px 1px; }',
        value: false,
      },
    ],
  },
  {
    id: 'property-no-unknown',
    hint:
      'This rule considers properties defined in the <a href="https://github.com/betit/known-css-properties#source">CSS Specifications and browser specific properties</a> to be known.',
    variants: [
      {
        hint: 'Disallow unknown properties.',
        invalidCode: 'a { <mark>colr</mark>: blue; }',
        validCode: 'a { <mark>color</mark>: green; }',
        value: true,
      },
      {
        hint: 'Allow unknown properties.',
        validCode: 'a { <mark>my-property</mark>: 1; }',
        value: false,
      },
    ],
  },
  {
    id: 'keyframe-declaration-no-important',
    variants: [
      {
        hint: 'Disallow !important within keyframe declarations.',
        invalidCode:
          '@keyframes important1 {\n  from {\n    margin-top: 50px;\n  }\n  to {\n    margin-top: 100px <mark>!important</mark>;\n  }\n}',
        validCode:
          '@keyframes important1 {\n  from {\n    margin-top: 50px;\n  }\n  to {\n    margin-top: 100px;\n  }\n}',
        value: true,
      },
      {
        hint: 'Allow !important within keyframe declarations.',
        validCode:
          '@keyframes important1 {\n  from {\n    margin-top: 50px;\n  }\n  to {\n    margin-top: 100px ! important;\n  }\n}',
        value: false,
      },
    ],
  },
  {
    id: 'declaration-block-no-duplicate-properties',
    variants: [
      {
        hint: 'Disallow duplicate properties within declaration blocks.',
        invalidCode: 'a { <mark>color</mark>: pink; <mark>color</mark>: orange; }',
        validCode: 'a { color: pink; }',
        value: true,
      },
      {
        hint: 'Allow duplicate properties within declaration blocks.',
        validCode: 'a { <mark>color</mark>: pink; background: orange; <mark>color</mark>: orange }',
        value: false,
      },
    ],
  },
  {
    id: 'declaration-block-no-redundant-longhand-properties',
    hint:
      "Disallow longhand properties that can be combined into one shorthand property. This rule will only complain if you've used the longhand equivalent of all the properties that the shorthand will set.",
    variants: [
      {
        hint: 'Disallow longhand properties.',
        invalidCode:
          'a {\n  margin-top: 1px;\n  margin-right: 2px;\n  margin-bottom: 3px;\n  margin-left: 4px;\n}',
        validCode: 'a { margin: 1px 2px 3px 4px; }',
        value: true,
      },
      {
        hint: 'Allow longhand properties.',
        validCode:
          'a {\n  -webkit-transition-property: top;\n  -webkit-transition-duration: 2s;\n  -webkit-transition-timing-function: ease;\n  -webkit-transition-delay: 0.5s;\n}',
        value: false,
      },
    ],
  },
  {
    id: 'declaration-block-no-shorthand-property-overrides',
    hint: 'Disallow shorthand properties that override related longhand properties.',
    variants: [
      {
        hint: 'Disallow shorthand properties.',
        invalidCode: 'a {\n  padding-left: 10px;\n  padding: 20px;\n}',
        validCode: 'a {\n  padding: 10px;\n  padding-left: 20px;\n}',
        value: true,
      },
      {
        hint: 'Allow shorthand properties.',
        validCode: 'a {\n  transition-property: opacity;\n  transition: opacity 1s linear;\n}',
        value: false,
      },
    ],
  },
  {
    id: 'block-no-empty',
    variants: [
      {
        hint: 'Disallow empty blocks.',
        invalidCode: 'a {}',
        validCode: 'a { color: pink; }',
        value: true,
      },
      {
        hint: 'Allow empty blocks.',
        validCode: 'a { }',
        value: false,
      },
    ],
  },
  {
    id: 'selector-pseudo-class-no-unknown',
    hint:
      'Disallow unknown pseudo-class selectors. All vendor-prefixed pseudo-class selectors are ignored.',
    variants: [
      {
        hint: 'Disallow unknown pseudo-class selectors.',
        invalidCode: 'a<mark>:unknown</mark> {}\na<mark>:hoverr</mark> {}',
        validCode: 'a<mark>:hover</mark> {}\ninput<mark>:-moz-placeholder</mark> {}',
        value: true,
      },
      {
        hint: 'Allow unknown pseudo-class selectors.',
        validCode: 'a<mark>:UNKNOWN</mark> {}',
        value: false,
      },
    ],
  },
  {
    id: 'selector-pseudo-element-no-unknown',
    hint:
      'Disallow unknown pseudo-element selectors. All vendor-prefixed pseudo-element selectors are ignored.',
    variants: [
      {
        hint: 'Disallow unknown pseudo-element selectors.',
        invalidCode: 'a<mark>::pseudo</mark> {}\na<mark>::element</mark> {}',
        validCode:
          'a<mark>:before</mark> {}\na<mark>::before</mark> {}\ninput<mark>::-moz-placeholder</mark> {}',
        value: true,
      },
      {
        hint: 'Allow unknown pseudo-element selectors.',
        validCode: 'a<mark>::PSEUDO</mark> {}',
        value: false,
      },
    ],
  },
  {
    id: 'selector-type-no-unknown',
    hint:
      'Disallow unknown type selectors. This rule considers tags defined in the HTML, SVG, and MathML specifications to be known.',
    variants: [
      {
        hint: 'Disallow unknown type selectors.',
        invalidCode: 'unknown {}',
        validCode: 'input {}\nul li {}',
        value: true,
      },
      {
        hint: 'Allow unknown type selectors.',
        validCode: 'tag {}',
        value: false,
      },
    ],
  },
  {
    id: 'media-feature-name-no-unknown',
    hint:
      "Disallow unknown media feature names. This rule considers media feature names defined in the CSS Specifications, up to and including Editor's Drafts, to be known.",
    variants: [
      {
        hint: 'Disallow unknown media feature names.',
        invalidCode: '@media screen and (<mark>unknown</mark>) {}',
        validCode:
          '@media all and (<mark>monochrome</mark>) {}\n@media (<mark>min-width</mark>: 700px) {}',
        value: true,
      },
      {
        hint: 'Allow unknown media feature names.',
        validCode: '@media screen and (<mark>unknown</mark>: 10px) {}',
        value: false,
      },
    ],
  },
  {
    id: 'at-rule-no-unknown',
    hint:
      "Disallow unknown at-rules. This rule considers at-rules defined in the CSS Specifications, up to and including Editor's Drafts, to be known.",
    variants: [
      {
        hint: 'Disallow unknown at-rules.',
        invalidCode: '@unknown {}',
        validCode: '@charset "UTF-8";',
        value: true,
      },
      {
        hint: 'Allow unknown at-rules.',
        validCode: '@something {}',
        value: false,
      },
    ],
  },
  {
    id: 'comment-no-empty',
    variants: [
      {
        hint: 'Disallow empty comments.',
        invalidCode: '/**/\n/* */',
        validCode: '/* comment */\n/*\n * Multi-line Comment*\n*/',
        value: true,
      },
      {
        hint: 'Allow empty comments.',
        validCode: '/*\n \n*/',
        value: false,
      },
    ],
  },
  {
    id: 'max-nesting-depth',
    hint: 'Limit the allowed nesting depth.',
    variants: [
      {
        hint: 'Nesting depth is 1.',
        invalidCode:
          'a {\n  & b { /* nesting depth 1 */\n    & .foo { /* nesting depth 2 */\n      color: pink;\n    }\n  }\n}',
        value: 1,
      },
      {
        hint: 'Nesting depth is 2.',
        invalidCode:
          'a {\n  & b { /* nesting depth 1 */\n    & .foo { /* nesting depth 2 */\n      @media print { /* nesting depth 3 */\n        color: pink;\n      }\n    }\n  }\n}',
        value: 2,
      },
      {
        hint: 'Nesting depth is 3.',
        invalidCode:
          'a {\n  & b { /* nesting depth 1 */\n    & .foo { /* nesting depth 2 */\n      @media print { /* nesting depth 3 */\n        & .baz { /* nesting depth 4 */\n          color: pink;\n        }\n      }\n    }\n  }\n}',
        value: 3,
      },
      {
        hint: 'Nesting depth is 4.',
        validCode:
          'a {\n  & b { /* nesting depth 1 */\n    & .foo { /* nesting depth 2 */\n      @media print { /* nesting depth 3 */\n        & .baz { /* nesting depth 4 */\n          color: pink;\n        }\n      }\n    }\n  }\n}',
        value: 4,
      },
    ],
  },
  {
    id: 'no-descending-specificity',
    hint:
      'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.',
    variants: [
      {
        hint: 'Disallow selectors of lower specificity.',
        invalidCode: 'b a {}\na {}\n\na + a {}\na {}',
        validCode: 'a {}\nb a {}\n\na {}\na + a {}',
        value: true,
      },
      {
        hint: 'Allow selectors of lower specificity.',
        validCode: 'b > a[foo] {}\na[foo] {}',
        value: false,
      },
    ],
  },
  {
    id: 'no-duplicate-selectors',
    variants: [
      {
        hint: 'Disallow duplicate selectors within a stylesheet.',
        invalidCode: '<mark>.foo</mark>,\n.bar,\n<mark>.foo</mark> {}',
        validCode: '.foo {\n  .foo {}\n}',
        value: true,
      },
      {
        hint: 'Allow duplicate selectors within a stylesheet.',
        validCode: '<mark>.foo</mark> {}\n.bar {}\n<mark>.foo</mark> {}',
        value: false,
      },
    ],
  },
  {
    id: 'no-empty-source',
    hint: 'Disallow empty sources. A source containing only whitespace is considered empty.',
    variants: [
      {
        hint: 'Disallow empty sources.',
        invalidCode: '\\t\\t',
        validCode: 'a {}\n\n/* Only comments */',
        value: true,
      },
      {
        hint: 'Allow empty sources.',
        validCode: '\\n',
        value: false,
      },
    ],
  },
  {
    id: 'no-extra-semicolons',
    hint: 'Disallow extra semicolons. This rule ignores semicolons after Less mixins.',
    variants: [
      {
        hint: 'Disallow extra semicolons.',
        invalidCode: '@import "x.css"<mark>;;</mark>\na { color: pink<mark>;;</mark> }',
        validCode: '@import "x.css"<mark>;</mark>',
        value: true,
      },
      {
        hint: 'Allow extra semicolons.',
        validCode: 'a { <mark>;</mark>color: pink; }',
        value: false,
      },
    ],
  },
  {
    id: 'no-invalid-double-slash-comments',
    hint:
      'Disallow double-slash comments (//...) which are not supported by CSS and <a href="https://stackoverflow.com/questions/12298890/is-it-bad-practice-to-comment-out-single-lines-of-css-with/20192639#20192639">could lead to unexpected results</a>.',
    variants: [
      {
        hint: 'Disallow double-slash comments.',
        invalidCode: 'a { // color: pink; }',
        validCode: 'a { /* color: pink; */ }',
        value: true,
      },
      {
        hint: 'Allow double-slash comments.',
        validCode: '// a { color: pink; }',
        value: false,
      },
    ],
  },
  {
    id: 'no-unknown-animations',
    hint:
      'Disallow unknown animations. This rule considers the identifiers of @keyframes rules defined within the same source to be known.',
    variants: [
      {
        hint: 'Disallow unknown animations.',
        invalidCode:
          'a { animation-name: <mark>fancccy-slide</mark>; }\n@keyframes <mark>fancy-slide</mark> {}',
        validCode:
          'a { animation-name: <mark>fancy-slide</mark>; }\n@keyframes <mark>fancy-slide</mark> {}',
        value: true,
      },
      {
        hint: 'Allow unknown animations.',
        validCode:
          'a { animation-name: <mark>jump</mark>; }\n@keyframes <mark>fancy-slide</mark> {}',
        value: false,
      },
    ],
  },
];
