/**
 * Checks if the passed-in value is a number.
 *
 * @param {number | string | boolean | null | undefined} value - The value to check.
 * @returns {boolean} `true` if the value is a number, `false` otherwise.
 *
 * @example
 * // Returns true
 * isNumber(123);
 *
 * @example
 * // Returns false
 * isNumber('123');
 */

const isNumber = (value: number | string | boolean | null | undefined): boolean => {
  return typeof value === 'number' && !Number.isNaN(value);
};

export { isNumber };
