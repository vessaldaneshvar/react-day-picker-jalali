import { format, Locale } from 'date-fns-jalali';

/**
 * The default formatter for the Year caption.
 */
export function formatYearCaption(
  year: Date,
  options?: {
    locale?: Locale;
  }
): string {
  return format(year, 'yyyy', options);
}
