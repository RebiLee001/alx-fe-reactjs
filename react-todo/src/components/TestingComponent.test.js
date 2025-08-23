// src/components/TestingComponent.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestingComponent from "./TestingComponent";

describe("TestingComponent", () => {
  test("renders with initial count", () => {
    render(<TestingComponent />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  });

  test("increments the count when increment button is clicked", () => {
    render(<TestingComponent />);
    fireEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });

  test("decrements the count when decrement button is clicked", () => {
    render(<TestingComponent />);
    fireEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: -1");
  });
});