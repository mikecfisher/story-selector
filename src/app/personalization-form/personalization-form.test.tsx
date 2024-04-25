import { fireEvent, render, screen } from "@testing-library/react";
import PersonalizationForm from "./personalization-form";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
  }),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
}));

describe("PersonalizationForm", () => {
  test("renders PersonalizationForm component", () => {
    render(<PersonalizationForm />);

    expect(
      screen.getByText(
        /Tell us about yourself so we can personalize your experience/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(/List the places you've lived/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Select topics below that you’re interested in exploring/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText(/Next/i)).toBeInTheDocument();
  });

  test('adds a new input field when "ADD A NEW PLACE" button is clicked', () => {
    const testID = "place-lived";
    render(<PersonalizationForm />);

    const button = screen.getByText(/ADD A NEW PLACE/i);

    const initialFields = screen.getAllByTestId(testID);
    expect(initialFields).toHaveLength(3);

    fireEvent.click(button);

    const fieldsAfterClick = screen.getAllByTestId(testID);
    expect(fieldsAfterClick).toHaveLength(4);
  });
});
