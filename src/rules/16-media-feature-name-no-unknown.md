---
id: media-feature-name-no-unknown
hint: Disallow unknown media feature names. This rule considers media feature names defined in the CSS Specifications, up to and including Editor's Drafts, to be known.
---

## true — Disallow unknown media feature names.

Invalid:
```css
@media screen and (<mark>unknown</mark>) {}
```

Valid:
```css
@media all and (<mark>monochrome</mark>) {}
@media (<mark>min-width</mark>: 700px) {}
```

## false — Allow unknown media feature names.

Valid:
```css
@media screen and (<mark>unknown</mark>: 10px) {}
```
