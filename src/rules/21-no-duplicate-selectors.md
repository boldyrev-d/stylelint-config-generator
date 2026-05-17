---
id: no-duplicate-selectors
---

## true — Disallow duplicate selectors within a stylesheet.

Invalid:
```css
<mark>.foo</mark>,
.bar,
<mark>.foo</mark> {}
```

Valid:
```css
.foo {
  .foo {}
}
```

## false — Allow duplicate selectors within a stylesheet.

Valid:
```css
<mark>.foo</mark> {}
.bar {}
<mark>.foo</mark> {}
```
