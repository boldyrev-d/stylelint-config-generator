---
id: at-rule-no-unknown
hint: Disallow unknown at-rules. This rule considers at-rules defined in the CSS Specifications, up to and including Editor's Drafts, to be known.
---

## true — Disallow unknown at-rules.

Invalid:
```css
@unknown {}
```

Valid:
```css
@charset "UTF-8";
```

## false — Allow unknown at-rules.

Valid:
```css
@something {}
```
