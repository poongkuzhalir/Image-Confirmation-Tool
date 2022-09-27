import { fireEvent, render, screen } from "@testing-library/react";
import ImageConfirmation from "./image-confirmation";

describe("render ImageConfirmation component", () => {
  test("renders the component", () => {
    render(<ImageConfirmation />);
    const linkElement = screen.getByText(/PoC Approving Tool/i);
    expect(linkElement).toBeInTheDocument();

    const buttonApprove = screen.getByTestId(/button-approve/i);
    expect(buttonApprove).toBeInTheDocument();

    const buttonReject = screen.getByTestId(/button-reject/i);
    expect(buttonReject).toBeInTheDocument();

    const image = screen.getByTestId("image");
    expect(image).toBeInTheDocument();
  });

  test("clicking the approve button shows check icon & reset button", () => {
    render(<ImageConfirmation />);

    const buttonApprove = screen.getByTestId(/button-approve/i);
    fireEvent.click(buttonApprove);

    expect(buttonApprove).not.toBeInTheDocument();
    expect(screen.getByTestId("svg-check")).toBeInTheDocument();
    expect(screen.getByTestId(/button-reset/i)).toBeInTheDocument();
    expect(screen.queryByText(/button-reject/i)).not.toBeInTheDocument();
  });

  test("clicking the reset button shows approve & reject button", () => {
    render(<ImageConfirmation />);

    const buttonReset = screen.getByTestId(/button-reset/i);
    fireEvent.click(buttonReset);

    expect(buttonReset).not.toBeInTheDocument();
    expect(screen.queryByText("svg-check")).not.toBeInTheDocument();
    expect(screen.getByTestId(/button-approve/i)).toBeInTheDocument();
    expect(screen.getByTestId(/button-reject/i)).toBeInTheDocument();
  });

  test("clicking the reject button shows close icon & reset button", () => {
    render(<ImageConfirmation />);

    const buttonReject = screen.getByTestId(/button-reject/i);
    fireEvent.click(buttonReject);

    expect(buttonReject).not.toBeInTheDocument();
    expect(screen.getByTestId("svg-close")).toBeInTheDocument();
    expect(screen.getByTestId(/button-reset/i)).toBeInTheDocument();
    expect(screen.queryByText(/button-approve/i)).not.toBeInTheDocument();
  });
});
