import React from "react";

export type PageRoute = {
  path: string;
  component: () => JSX.Element;
};
