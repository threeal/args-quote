import { stringify } from "./stringify";

it("should stringify the arguments", () => {
  expect(stringify(["foo", "bar baz", `foo "bar baz"`])).toBe(
    'foo "bar baz" `foo "bar baz"`',
  );
});