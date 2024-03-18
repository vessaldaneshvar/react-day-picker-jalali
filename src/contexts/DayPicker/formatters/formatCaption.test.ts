import { faIR } from 'date-fns-jalali/locale';

import { formatCaption } from './formatCaption';

const date = new Date(2022, 10, 21);

test('should return the formatted caption', () => {
  expect(formatCaption(date)).toEqual('November 2022');
});

describe('when a locale is passed in', () => {
  test('should format using the locale', () => {
    expect(formatCaption(date, { locale: faIR })).toEqual('noviembre 2022');
  });
});
