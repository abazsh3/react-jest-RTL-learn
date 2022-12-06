import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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

  test("button enables after checkbox is checked", async () => {
    render(<SummaryForm />);
    const termsCheckbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const submitButton = screen.getByRole("button", { name: /confirm order/i });

    await userEvent.click(termsCheckbox);

    expect(termsCheckbox).toBeChecked();
    expect(submitButton).toBeEnabled();

    await userEvent.click(termsCheckbox);

    expect(termsCheckbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });
});

describe("terms popover functions properly", () => {
  test("initial condition", () => {
    render(<SummaryForm />);
    const popover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).not.toBeInTheDocument();
  });

  test("popover appears when button is hovered and disappears when unhoverd", async () => {
    render(<SummaryForm />);
    const termsAndConditions = screen.getByText(/terms and conditions/i);

    await userEvent.hover(termsAndConditions);
    let popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    await userEvent.unhover(termsAndConditions);
    popover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(popover).not.toBeInTheDocument();
  });
});
