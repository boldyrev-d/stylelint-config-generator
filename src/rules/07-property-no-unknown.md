---
id: property-no-unknown
hint: This rule considers properties defined in the [CSS Specifications and browser specific properties](https://github.com/betit/known-css-properties#source) to be known.
---

## true — Disallow unknown properties.

Invalid:
```css
a { <mark>colr</mark>: blue; }
```

Valid:
```css
a { <mark>color</mark>: green; }
```

## false — Allow unknown properties.

Valid:
```css
a { <mark>my-property</mark>: 1; }
```
