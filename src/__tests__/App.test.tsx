import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "../app";

test("Добавление новой задачи", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});
