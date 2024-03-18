import React from 'react';

import { faIR } from 'date-fns-jalali/locale';
import { DayPicker } from 'react-day-picker';

export default function App() {
  return <DayPicker dir="rtl" locale={faIR} />;
}
