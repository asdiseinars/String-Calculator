const add = require("./calculator");

it("Should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("Should return number if only one number is in the string", () => {
    expect(add("5")).toBe(5);
});

it("Should return sum of two given numbers in string", () => {
    expect(add("3, 6")).toBe(9);
});

it("Should return sum of all numbers in string", () => {
    expect(add("2, 4, 5")).toBe(11);
});

it("Should return sum of all numbers in string", () => {
    expect(add("2, 4, 5, 3")).toBe(14);
});
