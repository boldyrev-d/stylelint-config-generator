---
id: keyframe-declaration-no-important
---

## true — Disallow !important within keyframe declarations.

Invalid:
```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px <mark>!important</mark>;
  }
}
```

Valid:
```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px;
  }
}
```

## false — Allow !important within keyframe declarations.

Valid:
```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px ! important;
  }
}
```
