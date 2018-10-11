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

it("Should return sum of multiple number", () => {
    expect(add("2, 4, 5")).toBe(11);
});

it("Should return sum of multiple numbers", () => {
    expect(add("2, 4, 5, 3")).toBe(14);
});

it("Should return sum of multiple numbers split with newline", () => {
	expect(add("2 \n1, 8")).toBe(11);
});

it("Should return sum of multiple numbers split with newline", () => {
	expect(add("2 \n1, 8")).toBe(11);
});

it("Should throw error on negative numbers", () => {
    expect(() => add("-3, -4")).toThrow('Negatives not allowed: -3');
});

it("Should ignore numbers bigger than 1000", () => {
    expect(add("1001, 2")).toBe(2);
});

it("Should handle differend delimeters", () => {
    expect(add("//;\n3;5")).toBe(8);
});

it("Should handle differend delimeters", () => {
    expect(add("//?\n9?2")).toBe(11);
});
