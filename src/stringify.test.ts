import { expect, it } from "vitest";
import { stringify } from "./stringify.js";

it("should stringify the arguments", () => {
  expect(stringify(["foo", "bar baz", `foo "bar baz"`])).toBe(
    'foo "bar baz" `foo "bar baz"`',
  );
});
