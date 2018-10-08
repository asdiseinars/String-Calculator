const add = require("./calculator");

it("Should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});
