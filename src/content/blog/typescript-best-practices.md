---
title: "TypeScript Best Practices for 2024"
date: "2024-10-10"
description: "A curated list of TypeScript best practices to write cleaner, safer, and more maintainable code."
tags: ["TypeScript", "JavaScript", "Best Practices"]
---

# TypeScript Best Practices

TypeScript has become the standard for building large-scale JavaScript applications. Here are some best practices to level up your TypeScript code.

## 1. Use Strict Mode

Always enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

This enables all strict type-checking options, catching more bugs at compile time.

## 2. Prefer `unknown` Over `any`

When you don't know the type, use `unknown` instead of `any`:

```typescript
// Bad
function processData(data: any) {
  return data.name; // No type checking
}

// Good
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'name' in data) {
    return (data as { name: string }).name;
  }
  throw new Error('Invalid data');
}
```

## 3. Use Discriminated Unions

Discriminated unions are perfect for modeling state:

```typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function handleState(state: AsyncState<User>) {
  switch (state.status) {
    case 'idle':
      return 'Waiting...';
    case 'loading':
      return 'Loading...';
    case 'success':
      return `Hello, ${state.data.name}!`;
    case 'error':
      return `Error: ${state.error.message}`;
  }
}
```

## 4. Use `satisfies` Operator

The `satisfies` operator validates types without widening:

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

// theme.colors.primary is still inferred as '#000', not string
```

## 5. Use Template Literal Types

Template literal types are powerful for string manipulation:

```typescript
type EventName = 'click' | 'focus' | 'blur';
type HandlerName = `on${Capitalize<EventName>}`;
// Result: 'onClick' | 'onFocus' | 'onBlur'
```

## Conclusion

TypeScript is a powerful tool when used correctly. These practices will help you write more robust and maintainable code. Keep learning and experimenting!
