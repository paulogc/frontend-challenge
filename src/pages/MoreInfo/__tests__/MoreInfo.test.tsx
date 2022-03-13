import { store } from "app/store";
import { MoreInfo } from "pages/MoreInfo";
import { render, act, fireEvent, waitFor } from "app/test-utils";
import { getColors } from "domain/signUpForm/data/api";

jest.mock("domain/signUpForm/data/api", () => ({
  getColors: jest.fn(),
}));

describe("More Info Page", () => {
  beforeEach(() => {
    (getColors as jest.Mock).mockResolvedValue(["green", "red"]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render page in initial state with disabled button an loading skeleton", async () => {
    const { queryByText, queryByTestId } = render(<MoreInfo />);

    expect(queryByText("Additional Info")).toBeInTheDocument();
    expect(queryByTestId("skeleton")).toBeInTheDocument();
    expect(queryByText("Next")).toHaveAttribute("disabled");

    await waitFor(() => queryByText("red"));
  });

  it("should hide skeleton render select component with result of api call", async () => {
    const { queryByText, queryByTestId } = render(<MoreInfo />);

    await waitFor(() => queryByText("red"));

    expect(queryByTestId("skeleton")).not.toBeInTheDocument();
    expect(queryByTestId("select")).toBeInTheDocument();
    expect(queryByText("Next")).toHaveAttribute("disabled");
  });

  it("should enable button when select color and agreed with terms and condition", async () => {
    const { queryByText, getByTestId } = render(<MoreInfo />);

    await waitFor(() => queryByText("red"));

    const colorSelect = getByTestId("select");
    const checkBox = getByTestId("checkbox");

    act(() => {
      fireEvent.change(colorSelect, { target: { value: "red" } });
    });

    act(() => {
      fireEvent.click(checkBox);
    });

    expect(queryByText("Next")).not.toHaveAttribute("disabled");
  });

  it("should complete step one and persist name email and password to the store when form submitted", async () => {
    const data = {
      name: "",
      email: "",
      password: "",
      color: "red",
      terms: true,
    };
    const { queryByText, getByTestId, getByText } = render(<MoreInfo />, store);

    await waitFor(() => queryByText("red"));

    const colorSelect = getByTestId("select");
    const checkBox = getByTestId("checkbox");
    const submitButton = getByText("Next");

    act(() => {
      fireEvent.change(colorSelect, { target: { value: "red" } });
    });

    act(() => {
      fireEvent.click(checkBox);
    });

    act(() => {
      fireEvent.click(submitButton);
    });

    const state = store.getState();

    expect(state.form.data).toEqual(data);
    expect(state.form.stepCompleted).toBe(2);
  });
});
