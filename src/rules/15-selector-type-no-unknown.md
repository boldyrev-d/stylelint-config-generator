---
id: selector-type-no-unknown
hint: Disallow unknown type selectors. This rule considers tags defined in the HTML, SVG, and MathML specifications to be known.
---

## true — Disallow unknown type selectors.

Invalid:
```css
unknown {}
```

Valid:
```css
input {}
ul li {}
```

## false — Allow unknown type selectors.

Valid:
```css
tag {}
```
