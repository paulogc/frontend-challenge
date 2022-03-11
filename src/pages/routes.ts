import { SignUpRoute } from "pages/SignUp/route";
import { MoreInfoRoute } from "pages/MoreInfo/route";
import { ConfirmationRoute } from "pages/Confirmation/route";
import { SuccessRoute } from "pages/Success/route";
import { ErrorRoute } from "pages/Error/route";
import type { PageRoute } from "app/router/types";

export const routes: PageRoute[] = [
  SignUpRoute,
  MoreInfoRoute,
  ConfirmationRoute,
  SuccessRoute,
  ErrorRoute,
];
