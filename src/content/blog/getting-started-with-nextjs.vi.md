---
title: "Bắt đầu với Next.js: Hướng dẫn toàn diện"
date: "2024-12-15"
description: "Tìm hiểu cách xây dựng ứng dụng web hiện đại với Next.js, từ thiết lập dự án đến triển khai."
tags: ["Next.js", "React", "Web Development"]
---

# Bắt đầu với Next.js

Next.js đã trở thành một trong những React framework phổ biến nhất để xây dựng ứng dụng web hiện đại. Trong hướng dẫn này, chúng ta sẽ đi qua mọi thứ bạn cần biết để bắt đầu.

## Tại sao chọn Next.js?

Next.js mang lại trải nghiệm phát triển tuyệt vời với các tính năng như:

- **Routing dựa trên file** — Không cần thư viện router riêng
- **Server-side rendering** — SEO tốt hơn và hiệu suất tải trang ban đầu cao hơn
- **Static site generation** — Pre-render trang tại thời điểm build
- **API routes** — Xây dựng backend song song với frontend
- **Tối ưu hóa hình ảnh** — Tự động tối ưu hình ảnh ngay từ đầu

## Thiết lập dự án

Bắt đầu đơn giản chỉ bằng lệnh:

```bash
npx create-next-app@latest my-app --typescript --tailwind
cd my-app
npm run dev
```

Lệnh này tạo một dự án Next.js mới với TypeScript và TailwindCSS được cấu hình sẵn.

## Cấu trúc dự án

Một dự án Next.js điển hình trông như thế này:

```
my-app/
├── src/
│   ├── pages/        # Routing dựa trên file
│   ├── components/   # Components tái sử dụng
│   ├── styles/       # Style toàn cục
│   └── lib/          # Các hàm tiện ích
├── public/           # Static assets
├── next.config.js    # Cấu hình Next.js
└── package.json
```

## Tạo trang đầu tiên

Trong Next.js, mỗi file trong thư mục `pages` trở thành một route. Tạo file mới tại `pages/about.tsx`:

```tsx
export default function AboutPage() {
  return (
    <div>
      <h1>Về tôi</h1>
      <p>Chào mừng đến trang web của tôi!</p>
    </div>
  );
}
```

Điều này tự động tạo route tại `/about`.

## Static Site Generation

Với một trang portfolio, static generation là lựa chọn hoàn hảo. Bạn có thể export toàn bộ trang thành HTML tĩnh:

```js
// next.config.js
const nextConfig = {
  output: 'export',
};
```

Điều này tạo ra một trang hoàn toàn tĩnh có thể được triển khai ở bất kỳ đâu — GitHub Pages, Netlify, hay Cloudflare Pages.

## Kết luận

Next.js giúp việc xây dựng ứng dụng web nhanh, hiện đại trở nên cực kỳ dễ dàng. Dù bạn đang xây dựng một portfolio đơn giản hay ứng dụng web phức tạp, Next.js đều có công cụ bạn cần.

Chúc bạn code vui vẻ!
