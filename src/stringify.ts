const whitespaceRegex = /\s/;

/**
 * Converts a list of arguments into a space-separated string.
 *
 * This function transforms the provided arguments into a single string, separating them with spaces.
 * Any argument containing whitespace is quoted. If the argument itself contains double quotes,
 * backticks are used for quoting instead.
 *
 * @param args - The list of arguments to convert.
 * @returns The space-separated string representation of the arguments.
 */
export function stringify(args: string[]): string {
  return args
    .map((arg) =>
      whitespaceRegex.test(arg)
        ? arg.includes('"')
          ? `\`${arg}\``
          : `"${arg}"`
        : arg,
    )
    .join(" ");
}
