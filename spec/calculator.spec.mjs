import {Calculator} from "../src/calculator.js";

// Test Suite: Group of Specs
describe("calculator.js", () => {
  // Specification: Group of Expectations
  it("should add number to the total", () => {
    const cal = new Calculator();
    cal.total = 3;
    cal.add(3);
    // Expectation
    expect(cal.total).toBe(6);
    cal.add(9);
    // Expectation
    expect(cal.total).toBe(15);
  });

  // Specification: Group of Expectations
  it("should subtract number from the total", () => {
    const cal = new Calculator();
    cal.total = 5;
    cal.subtract(3);
    // Expectation
    expect(cal.total).toBe(2);
  });

  // Specification: Group of Expectations
  it("should multiply number with the total", () => {
    const cal = new Calculator();
    cal.total = 5;
    cal.multiply(3);
    // Expectation
    expect(cal.total).toBe(15);
  });

  // Specification: Group of Expectations
  it("should divide number by the total", () => {
    const cal = new Calculator();
    cal.total = 5;
    cal.divide(2);
    // Expectation
    expect(cal.total).toBe(2.5);
  });
});
