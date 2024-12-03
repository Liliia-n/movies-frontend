/**
 * Extracts a token parameter from a given URL string.
 * @param url The URL string from which to extract the token parameter.
 * @returns The extracted token value as a string, or undefined if the token parameter is not found.
 *
 * @example
 * // Example URL string containing a token parameter
 * const exampleUrl = 'https://example.com/login?email=test@gmail.com&token=CfDJ8GBYo+0aLs';
 * @returns 'CfDJ8GBYo+0aLs'
 *
 */

const extractTokenFromUrl = (url: string): string | undefined => {
  const tokenIndex = url.indexOf('token=');
  let token;

  if (tokenIndex !== -1) {
    const startIndex = tokenIndex + 'token='.length;
    const endIndex = url.indexOf('&', startIndex);

    token = url.substring(startIndex, endIndex !== -1 ? endIndex : undefined);

    return token;
  }

  return undefined;
};

export default extractTokenFromUrl;
