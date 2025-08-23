// src/components/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders empty message when no todos", () => {
    render(<TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByTestId("empty-message")).toHaveTextContent(
      "No todos available"
    );
  });

  test("renders a list of todos", () => {
    const todos = [{ text: "Learn React", completed: false }];
    render(<TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByTestId("todo-item")).toHaveTextContent("Learn React");
  });

  test("calls onToggle when todo is clicked", () => {
    const todos = [{ text: "Learn Testing", completed: false }];
    const onToggle = jest.fn();
    render(<TodoList todos={todos} onToggle={onToggle} onDelete={() => {}} />);
    fireEvent.click(screen.getByText("Learn Testing"));
    expect(onToggle).toHaveBeenCalledWith(0);
  });

  test("calls onDelete when delete button is clicked", () => {
    const todos = [{ text: "Learn Jest", completed: false }];
    const onDelete = jest.fn();
    render(<TodoList todos={todos} onToggle={() => {}} onDelete={onDelete} />);
    fireEvent.click(screen.getByTestId("delete-btn-0"));
    expect(onDelete).toHaveBeenCalledWith(0);
  });
});
// Additional tests can be added for edge cases and other functionalities
// such as attempting to delete a non-existent todo, etc.
// However, the above tests cover the main functionalities of the TodoList component.
// Note: Ensure that the TodoList component has appropriate data-testid attributes
// if you want to select elements more reliably in tests.
// For example, you might add data-testid="todo-item" to each todo <li> element
// and then use screen.getAllByTestId("todo-item") in your tests.
// This helps avoid issues if the text content changes or if there are multiple
// elements with similar text.
