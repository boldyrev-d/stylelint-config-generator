---
id: unit-no-unknown
---

## true — Disallow unknown units.

Invalid:
```css
a { width: 10<mark>pixels</mark>; }
```

Valid:
```css
a { width: 10<mark>px</mark>; }
a { width: 10<mark>Px</mark>; }
```

## false — Allow unknown units.

Valid:
```css
a { width: calc(10px + 10<mark>pixels</mark>); }
```
