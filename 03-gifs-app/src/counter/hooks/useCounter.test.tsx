import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  //   let result: number = 0;

  //   beforeEach(() => {
  //     // console.log("** before each");
  //     const { result: hookValue } = renderHook(() => useCounter());
  //     result = hookValue;
  //   });

  test("should initialize whit value of 10", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test("should initialize whit value 18", () => {
    const initialValue = 18;
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(11);
  });

  test("should decrement counter when handleSubtract is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(9);
  });

  test("should set counter 10 when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
    });
    // act(() => {
    //   result.current.handleAdd();
    // });
    // console.log({ counter: result.current.counter });
    expect(result.current.counter).toBe(5);

    act(() => {
      result.current.handleReset();
    });

    // console.log({ counter: result.current.counter });
    expect(result.current.counter).toBe(10);
  });

  test("shouldn't decrement counter when is zero", () => {
    const counter = 2;
    const { result } = renderHook(() => useCounter(counter));

    act(() => {
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(0);
  });
});

