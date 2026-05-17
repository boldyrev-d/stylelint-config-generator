---
id: no-descending-specificity
hint: Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
---

## true — Disallow selectors of lower specificity.

Invalid:
```css
b a {}
a {}

a + a {}
a {}
```

Valid:
```css
a {}
b a {}

a {}
a + a {}
```

## false — Allow selectors of lower specificity.

Valid:
```css
b > a[foo] {}
a[foo] {}
```
