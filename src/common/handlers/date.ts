import { format, isAfter, isBefore, parseISO } from 'date-fns';

/**
 * Parses an ISO date string and formats it according to the specified date format.
 *
 * @param {string} date - The ISO date string to parse and format.
 * @param {string} dateFormat - The format string to use for formatting the date.
 * @returns {string} The formatted date string.
 *
 * @example
 * // Returns '21 August 2021'
 * parseDate('2021-08-21T07:00:18', 'dd MMMM yyyy');
 *
 * @example
 * // Returns '07:00'
 * parseDate('2021-08-21T07:00:18', 'HH:mm');
 */
const parseDate = (date: string, dateFormat: string): string => {
  const formattedDate = format(parseISO(date), dateFormat);

  return formattedDate;
};

/**
 * Checks if the given date is after the reference date.
 * @param date The date string to be checked.
 * @param referenceDate The reference date string to compare against.
 * @returns `true` if the date is after the reference date, otherwise `false`.
 *
 * @example
 * isDateAfter('2024-07-12', '2024-07-11'); // returns true
 * isDateAfter('2024-07-10', '2024-07-11'); // returns false
 */
const isDateAfter = (date: string, referenceDate: string): boolean => {
  return isAfter(parseISO(date), parseISO(referenceDate));
};

/**
 * Checks if the given date is before the reference date.
 * @param date The date string to be checked.
 * @param referenceDate The reference date string to compare against.
 * @returns `true` if the date is before the reference date, otherwise `false`.
 *
 * @example
 * isDateBefore('2024-07-10', '2024-07-11'); // returns true
 * isDateBefore('2024-07-12', '2024-07-11'); // returns false
 */
const isDateBefore = (date: string, referenceDate: string): boolean => {
  return isBefore(parseISO(date), parseISO(referenceDate));
};

/**
 * Checks if the given date is after or on the reference date.
 * @param date The date string to be checked.
 * @param referenceDate The reference date string to compare against.
 * @returns `true` if the date is on or after the reference date, otherwise `false`.
 */
const isDateAfterOrSame = (date: string, referenceDate: string): boolean => {
  return !isBefore(parseISO(date), parseISO(referenceDate));
};

/**
 * Checks if the given date is before or on the reference date.
 * @param date The date string to be checked.
 * @param referenceDate The reference date string to compare against.
 * @returns `true` if the date is on or before the reference date, otherwise `false`.
 */
const isDateBeforeOrSame = (date: string, referenceDate: string): boolean => {
  return !isAfter(parseISO(date), parseISO(referenceDate));
};

/**
 * Updates the time of the target date with the time components of the source date.
 * @param {string} targetDate - The date whose time will be updated.
 * @param {string} sourceDate - The date from which to extract the time components.
 * @returns {Date} The updated target date.
 */
const updateDateWithTime = (targetDate: string, sourceDate: string): Date => {
  const convertedTargetDate = new Date(targetDate);
  const convertedSourceDate = new Date(sourceDate);

  const hours = convertedSourceDate.getUTCHours();
  const minutes = convertedSourceDate.getUTCMinutes();
  const seconds = convertedSourceDate.getUTCSeconds();
  const milliseconds = convertedSourceDate.getUTCMilliseconds();

  convertedTargetDate.setUTCHours(hours, minutes, seconds, milliseconds);

  return convertedTargetDate;
};

/**
 * Sets the time of the target date to the specified time string.
 * @param {string} targetDate - The date whose time will be updated.
 * @param {string} timeString - The time string in "HH:mm" format.
 * @returns {Date} The updated target date.
 */
const setTimeOnDate = (targetDate: string, timeString: string): string => {
  const convertedTargetDate = new Date(targetDate);

  const [hours, minutes] = timeString.split(':').map(Number);

  convertedTargetDate.setUTCHours(hours, minutes, 0, 0);

  return convertedTargetDate.toISOString();
};

export {
  parseDate,
  isDateAfter,
  isDateBefore,
  isDateAfterOrSame,
  isDateBeforeOrSame,
  updateDateWithTime,
  setTimeOnDate
};
