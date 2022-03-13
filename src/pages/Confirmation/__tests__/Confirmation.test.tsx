import { store } from "app/store";
import { Confirmation } from "pages/Confirmation";
import { setFormValue } from "domain/signUpForm/data/actions";
import { render, act, fireEvent, waitFor } from "app/test-utils";
import { submitForm } from "domain/signUpForm/data/api";

jest.mock("domain/signUpForm/data/api", () => ({
  submitForm: jest.fn(),
}));

describe("Confirmation", () => {
  const data = {
    name: "Paulo",
    email: "paulo@paulo.com",
    password: "1234pa",
    color: "red",
    terms: true,
  };

  beforeEach(() => {
    store.dispatch(setFormValue(data));
    (submitForm as jest.Mock).mockResolvedValue("ok");
  });

  it("should render page on initial state", () => {
    const { queryByText } = render(<Confirmation />, store);

    expect(queryByText("Confirmation")).toBeInTheDocument();
    expect(queryByText(data.name)).toBeInTheDocument();
    expect(queryByText(data.email)).toBeInTheDocument();
    expect(queryByText(data.color)).toBeInTheDocument();
    expect(queryByText("Agree")).toBeInTheDocument();
    expect(queryByText("******")).toBeInTheDocument();
    expect(queryByText("Submit")).not.toHaveAttribute("disabled");
  });

  it("should display loading spinner and move step when form is submitted", async () => {
    const { queryByTestId, getByText, getByTestId } = render(
      <Confirmation />,
      store
    );

    const button = getByText("Submit");

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => getByTestId("spinner"));

    expect(queryByTestId("spinner")).toBeInTheDocument();
    expect(store.getState().form.stepCompleted).toBe(3);
  });
});
