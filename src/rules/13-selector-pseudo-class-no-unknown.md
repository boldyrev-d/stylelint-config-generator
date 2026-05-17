---
id: selector-pseudo-class-no-unknown
hint: Disallow unknown pseudo-class selectors. All vendor-prefixed pseudo-class selectors are ignored.
---

## true — Disallow unknown pseudo-class selectors.

Invalid:
```css
a<mark>:unknown</mark> {}
a<mark>:hoverr</mark> {}
```

Valid:
```css
a<mark>:hover</mark> {}
input<mark>:-moz-placeholder</mark> {}
```

## false — Allow unknown pseudo-class selectors.

Valid:
```css
a<mark>:UNKNOWN</mark> {}
```
