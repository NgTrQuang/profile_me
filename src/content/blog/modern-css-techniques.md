---
title: "Modern CSS Techniques Every Developer Should Know"
date: "2024-11-28"
description: "Explore the latest CSS features and techniques that make building beautiful, responsive layouts easier than ever."
tags: ["CSS", "TailwindCSS", "Design"]
---

# Modern CSS Techniques

CSS has evolved dramatically in recent years. Let's explore some of the most powerful modern techniques.

## Container Queries

Container queries allow you to style elements based on the size of their container, not the viewport:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

## CSS Grid Subgrid

Subgrid allows nested grids to align with their parent grid:

```css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 3;
}
```

## The `:has()` Selector

The `:has()` selector is like a "parent selector" — something CSS developers have wanted for years:

```css
/* Style a card differently when it contains an image */
.card:has(img) {
  grid-template-rows: auto 1fr;
}

/* Style a form group when its input is focused */
.form-group:has(input:focus) {
  border-color: blue;
}
```

## Scroll-Driven Animations

CSS now supports animations driven by scroll position:

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-on-scroll {
  animation: fade-in linear;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

## Nesting

Native CSS nesting is finally here:

```css
.card {
  padding: 1rem;
  border: 1px solid #eee;

  & .title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  &:hover {
    border-color: #333;
  }
}
```

## Conclusion

Modern CSS is incredibly powerful. These features reduce the need for JavaScript and make our stylesheets more maintainable. Keep experimenting and pushing the boundaries of what's possible with CSS!
