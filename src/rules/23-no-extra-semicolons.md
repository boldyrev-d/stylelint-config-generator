---
id: no-extra-semicolons
hint: Disallow extra semicolons. This rule ignores semicolons after Less mixins.
---

## true — Disallow extra semicolons.

Invalid:
```css
@import "x.css"<mark>;;</mark>
a { color: pink<mark>;;</mark> }
```

Valid:
```css
@import "x.css"<mark>;</mark>
```

## false — Allow extra semicolons.

Valid:
```css
a { <mark>;</mark>color: pink; }
```
