import { expect, it } from "vitest";
import { parse } from "./parse";

it("should parse the arguments", () => {
  expect(parse('foo "bar baz" \'foo bar baz\' `foo "bar baz"`')).toEqual([
    "foo",
    "bar baz",
    "foo bar baz",
    `foo "bar baz"`,
  ]);
});
