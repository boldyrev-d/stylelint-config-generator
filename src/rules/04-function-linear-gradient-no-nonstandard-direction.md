---
id: function-linear-gradient-no-nonstandard-direction
hint: Disallow direction values in linear-gradient() calls that are not valid according to the [standard syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax).
---

## true — Disallow direction values in linear-gradient() calls

Invalid:
```css
.foo { background: linear-gradient(<mark>top</mark>, #fff, #000); }
.foo { background: linear-gradient(<mark>45</mark>, #fff, #000); }
```

Valid:
```css
.foo { background: linear-gradient(<mark>to top</mark>, #fff, #000); }
.foo { background: linear-gradient(<mark>45deg</mark>, #fff, #000); }
```

## false — Allow direction values in linear-gradient() calls

Valid:
```css
.foo { background: linear-gradient(<mark>left</mark>, #fff, #000); }
```
