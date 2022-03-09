import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Routes } from "app/router/Routes";
import { routes } from "pages/routes";
import theme from "app/theme/default";
import { GlobalStyles } from "app/theme/GlobalStyle";
import { store } from "app/store";
import "./index.css";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes routes={routes} />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
