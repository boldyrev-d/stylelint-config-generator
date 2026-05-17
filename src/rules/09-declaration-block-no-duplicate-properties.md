---
id: declaration-block-no-duplicate-properties
---

## true — Disallow duplicate properties within declaration blocks.

Invalid:
```css
a { <mark>color</mark>: pink; <mark>color</mark>: orange; }
```

Valid:
```css
a { color: pink; }
```

## false — Allow duplicate properties within declaration blocks.

Valid:
```css
a { <mark>color</mark>: pink; background: orange; <mark>color</mark>: orange }
```
