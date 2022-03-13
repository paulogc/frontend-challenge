import { store } from "app/store";
import { SignUp } from "pages/SignUp";
import { render, act, fireEvent } from "app/test-utils";
import { fieldLabels, messages } from "domain/signUpForm/data/constants";

describe("SinUp Page", () => {
  it("should render page in initial state with disabled button", () => {
    const { queryByText } = render(<SignUp />);

    expect(queryByText("Sign Up")).toBeInTheDocument();
    expect(queryByText("Next")).toHaveAttribute("disabled");
  });

  it("should render error when name is not correctly filled", () => {
    const { getByPlaceholderText, queryByText } = render(<SignUp />);

    const input = getByPlaceholderText(fieldLabels.name);

    act(() => {
      fireEvent.change(input, { target: { value: "asd", name: "name" } });
    });

    act(() => {
      fireEvent.change(input, { target: { value: "", name: "name" } });
    });

    expect(queryByText(messages.required)).toBeInTheDocument();
    expect(queryByText("Next")).toHaveAttribute("disabled");
  });

  it("should render error when email is not correctly filled", () => {
    const { getByPlaceholderText, queryByText } = render(<SignUp />);

    const input = getByPlaceholderText(fieldLabels.email);

    act(() => {
      fireEvent.change(input, {
        target: { value: "teste@", name: "email" },
      });
    });

    expect(queryByText(messages.email)).toBeInTheDocument();
    expect(queryByText("Next")).toHaveAttribute("disabled");
  });

  it("should render error when password is not correctly filled", () => {
    const { getByPlaceholderText, queryByText } = render(<SignUp />);

    const input = getByPlaceholderText(fieldLabels.password);

    act(() => {
      fireEvent.change(input, {
        target: { value: "sdf123", name: "password" },
      });
    });

    act(() => {
      fireEvent.change(input, { target: { value: "", name: "password" } });
    });

    expect(queryByText(messages.required)).toBeInTheDocument();
    expect(queryByText("Next")).toHaveAttribute("disabled");
  });

  it("should enable next button when all fields are correctly filled", () => {
    const { getByPlaceholderText, queryByText } = render(<SignUp />);

    const nameInput = getByPlaceholderText(fieldLabels.name);
    const emailInput = getByPlaceholderText(fieldLabels.email);
    const passwordInput = getByPlaceholderText(fieldLabels.password);

    act(() => {
      fireEvent.change(nameInput, {
        target: { value: "Paulo", name: "name" },
      });
    });

    act(() => {
      fireEvent.change(emailInput, {
        target: { value: "paulo@paulo.com", name: "email" },
      });
    });

    act(() => {
      fireEvent.change(passwordInput, {
        target: { value: "1234pa", name: "password" },
      });
    });

    expect(queryByText("Next")).not.toHaveAttribute("disabled");
  });

  it("should complete step one and persist name email and password to the store when form submitted", () => {
    const data = {
      name: "Paulo",
      email: "paulo@paulo.com",
      password: "1234pa",
      color: "",
      terms: false,
    };

    const { getByPlaceholderText, getByText, queryByText } = render(
      <SignUp />,
      store
    );

    const nameInput = getByPlaceholderText(fieldLabels.name);
    const emailInput = getByPlaceholderText(fieldLabels.email);
    const passwordInput = getByPlaceholderText(fieldLabels.password);
    const nextButton = getByText("Next");

    act(() => {
      fireEvent.change(nameInput, {
        target: { value: data.name, name: "name" },
      });
    });

    act(() => {
      fireEvent.change(emailInput, {
        target: { value: data.email, name: "email" },
      });
    });

    act(() => {
      fireEvent.change(passwordInput, {
        target: { value: data.password, name: "password" },
      });
    });

    act(() => {
      fireEvent.click(nextButton);
    });

    const state = store.getState();

    expect(state.form.data).toEqual(data);
    expect(state.form.stepCompleted).toBe(1);
  });
});
