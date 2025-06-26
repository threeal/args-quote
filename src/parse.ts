const regex = /"([^"]*)"|'([^']*)'|`([^`]*)`|(\S+)/g;

/**
 * Converts a space-separated string into a list of arguments.
 *
 * This function parses the provided string, which contains arguments separated by spaces and possibly enclosed in quotes, into a list of arguments.
 *
 * @param str - The space-separated string to parse.
 * @returns A list of arguments.
 */
export function parse(str: string): string[] {
  const args: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(str)) !== null) {
    if (match[1]) {
      args.push(match[1]);
    } else if (match[2]) {
      args.push(match[2]);
    } else if (match[3]) {
      args.push(match[3]);
    } else if (match[4]) {
      args.push(match[4]);
    }
  }
  return args;
}
