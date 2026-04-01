---
title: "Các Kỹ Thuật CSS Hiện Đại Mà Mọi Lập Trình Viên Nên Biết"
date: "2024-11-28"
description: "Khám phá những tính năng và kỹ thuật CSS mới nhất giúp việc xây dựng giao diện đẹp và responsive trở nên dễ dàng hơn bao giờ hết."
tags: ["CSS", "TailwindCSS", "Design"]
---

# Các Kỹ Thuật CSS Hiện Đại

CSS đã phát triển mạnh mẽ trong những năm gần đây. Hãy cùng khám phá một số kỹ thuật hiện đại và mạnh mẽ nhất.

## Container Queries

Container queries cho phép bạn áp dụng style dựa trên kích thước của phần tử cha, thay vì toàn bộ viewport:

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

Subgrid cho phép các grid lồng nhau có thể căn chỉnh theo grid cha:


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

## Selector `:has()`

Selector `:has()` giống như một “parent selector” — điều mà các lập trình viên CSS đã mong chờ từ rất lâu:


```css
/* Style thẻ card khác đi khi nó chứa hình ảnh */
.card:has(img) {
  grid-template-rows: auto 1fr;
}

/* Style nhóm form khi input bên trong được focus */
.form-group:has(input:focus) {
  border-color: blue;
}
```

## Scroll-Driven Animations

CSS hiện nay hỗ trợ animation dựa trên vị trí cuộn (scroll):

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

CSS thuần (native) hiện đã hỗ trợ nesting:

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

## Kết luận

CSS hiện đại vô cùng mạnh mẽ. Những tính năng này giúp giảm sự phụ thuộc vào JavaScript và làm cho stylesheet dễ bảo trì hơn. Hãy tiếp tục thử nghiệm và khám phá giới hạn mới của CSS!