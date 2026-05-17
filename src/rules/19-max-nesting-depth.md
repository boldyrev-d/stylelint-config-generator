---
id: max-nesting-depth
hint: Limit the allowed nesting depth.
---

## 1 — Nesting depth is 1.

Invalid:
```css
a {
  & b { /* nesting depth 1 */
    & .foo { /* nesting depth 2 */
      color: pink;
    }
  }
}
```

## 2 — Nesting depth is 2.

Invalid:
```css
a {
  & b { /* nesting depth 1 */
    & .foo { /* nesting depth 2 */
      @media print { /* nesting depth 3 */
        color: pink;
      }
    }
  }
}
```

## 3 — Nesting depth is 3.

Invalid:
```css
a {
  & b { /* nesting depth 1 */
    & .foo { /* nesting depth 2 */
      @media print { /* nesting depth 3 */
        & .baz { /* nesting depth 4 */
          color: pink;
        }
      }
    }
  }
}
```

## 4 — Nesting depth is 4.

Valid:
```css
a {
  & b { /* nesting depth 1 */
    & .foo { /* nesting depth 2 */
      @media print { /* nesting depth 3 */
        & .baz { /* nesting depth 4 */
          color: pink;
        }
      }
    }
  }
}
```
