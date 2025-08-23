import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);
  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.submit(input.closest("form"));
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Build a Todo App").closest("li");
  const deleteBtn = within(todoItem).getByText("Delete");
  fireEvent.click(deleteBtn);
  expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
});

test("does not add an empty todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);

  // try submitting empty/whitespace only
  fireEvent.change(input, { target: { value: "   " } });
  fireEvent.submit(input.closest("form"));

  // Ensure the initial todos are still present
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();

  // Ensure no new todo was added
  expect(screen.getAllByRole("listitem").length).toBe(2);
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
