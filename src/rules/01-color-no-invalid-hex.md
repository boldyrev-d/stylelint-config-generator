---
id: color-no-invalid-hex
hint: Longhand hex colors can be either 6 or 8 (with alpha channel) hexadecimal characters. And their shorthand variants are 3 and 4 characters respectively.
---

## true — Disallow invalid hex colors.

Invalid:
```css
a { color: <mark>#00</mark>; }
a { color: <mark>#12345aa</mark>; }
```

Valid:
```css
a { color: <mark>#000</mark>; }
a { color: <mark>#fff1a0</mark>; }
```

## false — Allow invalid hex colors.

Valid:
```css
a { color: <mark>#fff1az;</mark> }
```
