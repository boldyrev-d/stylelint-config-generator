---
id: declaration-block-no-redundant-longhand-properties
hint: Disallow longhand properties that can be combined into one shorthand property. This rule will only complain if you've used the longhand equivalent of all the properties that the shorthand will set.
---

## true — Disallow longhand properties.

Invalid:
```css
a {
  margin-top: 1px;
  margin-right: 2px;
  margin-bottom: 3px;
  margin-left: 4px;
}
```

Valid:
```css
a { margin: 1px 2px 3px 4px; }
```

## false — Allow longhand properties.

Valid:
```css
a {
  -webkit-transition-property: top;
  -webkit-transition-duration: 2s;
  -webkit-transition-timing-function: ease;
  -webkit-transition-delay: 0.5s;
}
```
