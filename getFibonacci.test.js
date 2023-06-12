const getFibonacci = require("./getFibonacci");
test("1番目のフィボナッチ数は1", () => {
  expect(getFibonacci(1)).toBe(1);
});
test("2番目のフィボナッチ数は2", () => {
  expect(getFibonacci(2)).toBe(1);
});
test("10番目のフィボナッチ数は55", () => {
  expect(getFibonacci(10)).toBe(55);
});
test("0番目のフィボナッチ数はエラー", () => {
  expect(getFibonacci(0)).toBe("Please input a positive integer");
});
test("アイウエオ番目のフィボナッチ数はエラー", () => {
  expect(getFibonacci("アイウエオ")).toBe("Please input an integer");
});
test("1.5番目のフィボナッチ数はエラー", () => {
  expect(getFibonacci(1.5)).toBe("Please input an integer");
});
