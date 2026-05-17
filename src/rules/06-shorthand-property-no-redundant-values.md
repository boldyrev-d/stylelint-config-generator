---
id: shorthand-property-no-redundant-values
hint: This rule alerts you when you use redundant values in a shorthand properties.
---

## true — Disallow redundant values in shorthand properties

Invalid:
```css
a { margin: 1px 1px; }
a { padding: 1px 1px 1px 1px; }
a { border-radius: 1px 2px 1px 2px; }
```

Valid:
```css
a { margin: 1px; }
a { margin: 1px 1px 1px 2px; }
```

## false — Allow redundant values in shorthand properties

Valid:
```css
a { -webkit-border-radius: 1px 1px 1px 1px; }
```
