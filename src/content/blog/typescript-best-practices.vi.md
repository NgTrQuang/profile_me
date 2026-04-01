---
title: "Các Best Practices TypeScript cho năm 2024"
date: "2024-10-10"
description: "Danh sách các best practices TypeScript giúp bạn viết code sạch hơn, an toàn hơn và dễ bảo trì hơn."
tags: ["TypeScript", "JavaScript", "Best Practices"]
---

# Các Best Practices TypeScript

TypeScript đã trở thành tiêu chuẩn cho việc xây dựng các ứng dụng JavaScript quy mô lớn. Dưới đây là một số best practices giúp nâng cao chất lượng code TypeScript của bạn.

## 1. Sử dụng Strict Mode

Luôn bật strict mode trong file `tsconfig.json` của bạn:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Điều này sẽ kích hoạt toàn bộ các tùy chọn kiểm tra kiểu nghiêm ngặt, giúp phát hiện nhiều lỗi hơn ngay từ lúc compile.

## 2. Ưu tiên unknown thay vì any

Khi bạn không biết kiểu dữ liệu, hãy dùng unknown thay vì any:

```typescript
// Không tốt
function processData(data: any) {
  return data.name; // Không có kiểm tra kiểu
}

// Tốt
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'name' in data) {
    return (data as { name: string }).name;
  }
  throw new Error('Dữ liệu không hợp lệ');
}
```

## 3. Sử dụng Discriminated Unions

Discriminated unions rất phù hợp để mô hình hóa trạng thái:

```typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function handleState(state: AsyncState<User>) {
  switch (state.status) {
    case 'idle':
      return 'Đang chờ...';
    case 'loading':
      return 'Đang tải...';
    case 'success':
      return `Xin chào, ${state.data.name}!`;
    case 'error':
      return `Lỗi: ${state.error.message}`;
  }
}
```

## 4. Sử dụng toán tử `satisfies`

Toán tử `satisfies` giúp kiểm tra kiểu mà không làm mất đi kiểu suy luận chi tiết:

```typescript
type Theme = {
  colors: Record<string, string>;
  spacing: Record<string, number>;
};

const theme = {
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
  spacing: {
    sm: 4,
    md: 8,
    lg: 16,
  },
} satisfies Theme;

// theme.colors.primary vẫn được suy luận là '#000', không phải string
```

## 5. Sử dụng Template Literal Types

Template literal types rất mạnh mẽ trong việc xử lý chuỗi:

```typescript
type EventName = 'click' | 'focus' | 'blur';
type HandlerName = `on${Capitalize<EventName>}`;
// Kết quả: 'onClick' | 'onFocus' | 'onBlur'
```

## Kết luận

TypeScript là một công cụ mạnh mẽ khi được sử dụng đúng cách. Những thực hành này sẽ giúp bạn viết code chắc chắn và dễ bảo trì hơn. Hãy tiếp tục học hỏi và thử nghiệm!