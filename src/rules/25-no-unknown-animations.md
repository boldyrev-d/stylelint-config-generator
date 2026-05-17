---
id: no-unknown-animations
hint: Disallow unknown animations. This rule considers the identifiers of @keyframes rules defined within the same source to be known.
---

## true — Disallow unknown animations.

Invalid:
```css
a { animation-name: <mark>fancccy-slide</mark>; }
@keyframes <mark>fancy-slide</mark> {}
```

Valid:
```css
a { animation-name: <mark>fancy-slide</mark>; }
@keyframes <mark>fancy-slide</mark> {}
```

## false — Allow unknown animations.

Valid:
```css
a { animation-name: <mark>jump</mark>; }
@keyframes <mark>fancy-slide</mark> {}
```
