import { describe, expect, test } from "vitest";
import { add, divide, multiply, substract } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });

  test("should add two negative numbers", () => {
    // ! 1. Arrange
    const a = -2;
    const b = -4;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("should substract two positives numbers", () => {
    const a = 5;
    const b = 1;

    const result = substract(a, b);

    expect(result).toBe(a - b);
  });

  test("should substract two negative numbers", () => {
    const a = -2;
    const b = -7;

    const result = substract(a, b);

    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    const a = 5;
    const b = 3;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test("should multiply two numbers and one of them is zero", () => {
    const a = 8;
    const b = 0;

    const result = multiply(a, b);

    expect(result).toBe(0);
  });
});

describe("divide",()=>{
  test("should divide two positive numbers", ()=>{
    const a = 2;
    const b = 4;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});
