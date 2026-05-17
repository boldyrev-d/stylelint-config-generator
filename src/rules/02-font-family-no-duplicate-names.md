---
id: font-family-no-duplicate-names
---

## true — Disallow duplicate font family names.

Invalid:
```css
a { font-family: 'Times', <mark>Times</mark>, serif; }
```

## false — Allow duplicate font family names.

Valid:
```css
a { font: 1em "Arial", <mark>'Arial'</mark>, sans-serif; }
```
