import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Test item";
    render(<ItemCounter name={name} />);

    // screen.debug();

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Control de Nintendo";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count when +1 button is pressed", () => {
    const quantity = 1;
    render(<ItemCounter name={"Test item"} quantity={quantity} />);

    const [buttonAdd] = screen.getAllByRole("button");
    // console.log("Botón:", buttonAdd.innerHTML);

    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    const quantity = 5;
    render(<ItemCounter name={"Test item"} quantity={quantity} />);

    const [, buttonSubstract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubstract);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count when -1 button is pressed and quantity is 1", () => {
    const quantity = 1;
    render(<ItemCounter name={"Test item"} quantity={quantity} />);

    const [, buttonSubstract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubstract);

    expect(screen.getByText("1")).toBeDefined();
  });

  test("should change to red when count is 1", () => {
    const quantity = 1
    const name = "Test item";
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);
    // console.log('***Style:', itemText.style.color);
    expect(itemText.style.color).toBe("red");
  });
});
