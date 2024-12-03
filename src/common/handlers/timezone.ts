import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { isoDateTimeFormat, timezoneOffset } from 'src/common/constants';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Combines the date from the `date` string and the time components from the `time` string, adjusts for the local timezone offset, and formats the result as an ISO 8601 string with a fixed timezone offset.
 *
 * @param {string} date - The date string to which the time components will be applied (format: 'YYYY-MM-DD').
 * @param {string} time - The time string from which to extract the hours, minutes, and seconds (format: 'HH:mm:ss').
 * @returns {string} The combined date and time as an ISO 8601 string with a fixed timezone offset.
 */
const convertToTimezoneWithoutOffset = (date: string, time: string): string => {
  const convertedDate = dayjs(date);
  const convertedTime = dayjs(time);

  const combinedDateTime = convertedDate
    .hour(convertedTime.hour())
    .minute(convertedTime.minute())
    .second(convertedTime.second());

  const localTimezoneOffset = dayjs().utcOffset() / 60;
  const dateTimeWithOffset = combinedDateTime.utcOffset(localTimezoneOffset);

  return `${dateTimeWithOffset.format(isoDateTimeFormat)}${timezoneOffset}`;
};

export { convertToTimezoneWithoutOffset };
