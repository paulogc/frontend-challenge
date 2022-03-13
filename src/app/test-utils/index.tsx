import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { store } from "app/store";
import theme from "app/theme/default";

const AllTheProviders = ({
  children,
  mockedStore = store,
}: {
  children: React.ReactNode;
  mockedStore: typeof store;
}) => {
  return (
    <Provider store={mockedStore}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  mockedStore?: typeof store,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    wrapper: () => AllTheProviders({ children: ui, mockedStore }),
    ...options,
  });

export * from "@testing-library/react";

export { customRender as render };
