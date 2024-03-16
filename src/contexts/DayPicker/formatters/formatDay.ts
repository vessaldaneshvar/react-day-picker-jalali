import { format, Locale } from 'date-fns-jalali';

/**
 * The default formatter for the Day button.
 */
export function formatDay(day: Date, options?: { locale?: Locale }): string {
  return format(day, 'd', options);
}
