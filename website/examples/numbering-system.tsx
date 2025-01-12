import React from 'react';

import { format } from 'date-fns-jalali';
import { faIR } from 'date-fns-jalali/locale';
import {
  DateFormatter,
  DayPicker,
  WeekNumberFormatter
} from 'react-day-picker';

const NU_LOCALE = 'ar-u-nu-arab';

const formatDay: DateFormatter = (day) =>
  day.getDate().toLocaleString(NU_LOCALE);

const formatWeekNumber: WeekNumberFormatter = (weekNumber) => {
  return weekNumber.toLocaleString(NU_LOCALE);
};

const formatCaption: DateFormatter = (date, options) => {
  const y = date.getFullYear().toLocaleString(NU_LOCALE);
  const m = format(date, 'LLLL', { locale: options?.locale });
  return `${m} ${y}`;
};

export default function App() {
  return (
    <DayPicker
      locale={faIR}
      dir="rtl"
      showWeekNumber
      formatters={{ formatDay, formatCaption, formatWeekNumber }}
    />
  );
}
