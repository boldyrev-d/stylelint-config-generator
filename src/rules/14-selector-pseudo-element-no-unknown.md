---
id: selector-pseudo-element-no-unknown
hint: Disallow unknown pseudo-element selectors. All vendor-prefixed pseudo-element selectors are ignored.
---

## true — Disallow unknown pseudo-element selectors.

Invalid:
```css
a<mark>::pseudo</mark> {}
a<mark>::element</mark> {}
```

Valid:
```css
a<mark>:before</mark> {}
a<mark>::before</mark> {}
input<mark>::-moz-placeholder</mark> {}
```

## false — Allow unknown pseudo-element selectors.

Valid:
```css
a<mark>::PSEUDO</mark> {}
```
