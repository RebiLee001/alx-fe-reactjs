import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Build a Todo App").closest("li");
  const deleteBtn = within(todoItem).getByText("Delete");
  fireEvent.click(deleteBtn);
  expect(todoItem).not.toBeInTheDocument();
});
