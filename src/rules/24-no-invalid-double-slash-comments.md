---
id: no-invalid-double-slash-comments
hint: Disallow double-slash comments (//...) which are not supported by CSS and [could lead to unexpected results](https://stackoverflow.com/questions/12298890/is-it-bad-practice-to-comment-out-single-lines-of-css-with/20192639#20192639).
---

## true — Disallow double-slash comments.

Invalid:
```css
a { // color: pink; }
```

Valid:
```css
a { /* color: pink; */ }
```

## false — Allow double-slash comments.

Valid:
```css
// a { color: pink; }
```
