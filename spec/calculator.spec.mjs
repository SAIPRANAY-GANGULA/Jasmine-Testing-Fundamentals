import {ArithmeticError, Calculator} from "../src/calculator.js";

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

  //ToBe Matcher (===)
  it("should initialize the total", function () {
    const calculator = new Calculator();
    // let person1 = { name: "leela" };
    // let person2 = { name: "leela" };
    //
    // expect(person1).toBe(person2); // false

    expect(calculator.total).toBeFalsy();
    expect(calculator.total).toBe(0);
  });

  //ToEqual Matcher
  it("should initialize the calculator", function () {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();

    expect(calculator1).toBeTruthy();
    expect(calculator2).toBeTruthy();
    expect(calculator1).toEqual(calculator2);
  });

  //not matcher
  it("should have unique calculator object", function () {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).not.toBe(calculator2);
  });

  //toBeUndefined
  it("should have common methods", function () {
    const calculator = new Calculator();
    expect(calculator.add).not.toBeUndefined();
    expect(calculator.multiply).not.toBeUndefined();
    expect(calculator.subtract).toBeDefined();
    expect(calculator.divide).toBeDefined();
  });

  //toBeNUll
  it("can overwrite total value", function () {
    const calculator = new Calculator();
    calculator.total = null;
    expect(calculator.total).toBeNull();
  });

  //toContain matcher
  it("should have the calculator constructor", function () {
    const calculator = new Calculator();
    let arr = [1, 2, 3, 4];
    expect(arr).toContain(3);
    expect(calculator.constructor.name).toContain("Calc");
  });

  //toBeNaN Matcher
  it("doesnot handle NaN for multiply", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply("a");
    expect(calculator.total).toBeNaN();
  });

  //toThrow matcher
  it("should throw error when divide by zero", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(function () {
      calculator.divide(0);
    }).toThrow();

    expect(function () {
      calculator.divide(0);
    }).toThrow(new Error("number cannot be zero"));

    expect(function () {
      calculator.divide(0);
    }).toThrowError("number cannot be zero");
  });

  //toThrowError Matcher
  it("should throw error with message when divide by zero", function () {
    const calculator = new Calculator();
    calculator.total = 10;

    expect(function () {
      calculator.divide(0);
    }).toThrowError();

    expect(function () {
      calculator.divide(0);
    }).toThrowError("number cannot be zero");

    expect(function () {
      calculator.divide(0);
    }).toThrowError(ArithmeticError, "number cannot be zero");
  });

  //toMatch Matcher
  it("should return total a number", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(calculator.add(10)).toBe(20);
    expect(calculator.total).toMatch(/-?\d+/);
    expect(typeof calculator.total).toMatch("numbe");
  });

  it("should return the total as value", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(calculator.total).toEqual(jasmine.anything());
    //expect(null).toEqual(jasmine.anything()); // false
    //expect(undefined).toEqual(jasmine.anything()); // false
  });

  //any Matcher
  it("should be an instance ", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(calculator).toEqual(jasmine.any(Object));
    expect(calculator).toEqual(jasmine.any(Calculator));
    expect(calculator.total).toEqual(jasmine.any(Number));
  });

  //objectContaining
  it("should contain total as key", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(calculator).toEqual(
      jasmine.objectContaining({
        total: 10,
      })
    );

    expect(typeof calculator.total).toEqual(jasmine.stringContaining("numb"));
  });
});
