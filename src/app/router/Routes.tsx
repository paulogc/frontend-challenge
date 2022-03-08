import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import type { PageRoute } from "./types";
import PageWrapper from "ui/PageWrapper";

type RoutesProps = {
  routes: PageRoute[];
};

export const Routes = ({ routes }: RoutesProps) => (
  <Switch>
    {routes.map(({ component: Component, path }) => (
      <Route
        key="active_route"
        path={path}
        element={
          <PageWrapper>
            <Component />
          </PageWrapper>
        }
      ></Route>
    ))}
  </Switch>
);
