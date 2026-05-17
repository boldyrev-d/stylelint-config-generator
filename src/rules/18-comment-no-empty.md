---
id: comment-no-empty
---

## true — Disallow empty comments.

Invalid:
```css
/**/
/* */
```

Valid:
```css
/* comment */
/*
 * Multi-line Comment*
*/
```

## false — Allow empty comments.

Valid:
```css
/*
 
*/
```
