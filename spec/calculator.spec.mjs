import { add } from "../src/calculator.js";

describe("calculator.js", () => {
  it("should add two numbers", () => {
    expect(add(3, 2)).toBe(5);
  });
});
