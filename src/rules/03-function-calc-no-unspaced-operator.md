---
id: function-calc-no-unspaced-operator
hint: Disallow an unspaced operator within calc functions. Before the operator, there must be a single whitespace or a newline plus indentation. After the operator, there must be a single whitespace or a newline.
---

## true — Disallow an unspaced operator within calc functions.

Invalid:
```css
a { top: calc(1px<mark>+ </mark>2px); }
```

Valid:
```css
a { top: calc(1px<mark> + </mark>2px); }
```

## false — Allow an unspaced operator within calc functions.

Valid:
```css
a { top: calc(1px+2px); }
```
