import { format, Locale } from 'date-fns-jalali';

/**
 * The default formatter for the name of the weekday.
 */
export function formatWeekdayName(
  weekday: Date,
  options?: { locale?: Locale }
): string {
  return format(weekday, 'cccccc', options);
}
