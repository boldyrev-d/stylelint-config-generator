---
id: declaration-block-no-shorthand-property-overrides
hint: Disallow shorthand properties that override related longhand properties.
---

## true — Disallow shorthand properties.

Invalid:
```css
a {
  padding-left: 10px;
  padding: 20px;
}
```

Valid:
```css
a {
  padding: 10px;
  padding-left: 20px;
}
```

## false — Allow shorthand properties.

Valid:
```css
a {
  transition-property: opacity;
  transition: opacity 1s linear;
}
```
