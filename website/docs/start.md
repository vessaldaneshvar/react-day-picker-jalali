---
hide_table_of_contents: true
---

# Getting Started

1. Add `react-day-picker` and [date-fns](https://date-fns.org) to your dependencies:

```bash
npm install react-day-picker-jalali date-fns-jalali   # with npm
pnpm install react-day-picker-jalali date-fns-jalali  # with pnpm
yarn add react-day-picker-jalali date-fns-jalali      # with yarn
```

2. When importing, include the DayPicker CSS in your component:

```tsx
import { DayPicker } from 'react-day-picker-jalali';
import 'react-day-picker-jalali/dist/style.css';

function Component() {
  return <DayPicker />;
}
```

## Example

```include-example
start
```
