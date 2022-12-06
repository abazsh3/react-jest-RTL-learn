import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("terms checkbox functions properly", () => {
  test("initial condition", () => {
    render(<SummaryForm />);
    const termsCheckbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const submitButton = screen.getByRole("button", { name: /confirm order/i });
    expect(termsCheckbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });

  test("button enables after checkbox is checked", () => {
    render(<SummaryForm />);
    const termsCheckbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const submitButton = screen.getByRole("button", { name: /confirm order/i });

    fireEvent.click(termsCheckbox);

    expect(termsCheckbox).toBeChecked();
    expect(submitButton).toBeEnabled();

    fireEvent.click(termsCheckbox);

    expect(termsCheckbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });
});
