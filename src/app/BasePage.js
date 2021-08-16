import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen } from "../_metronic/layout";
import { MANAGE_ORDERS_URL } from "../_metronic/_partials/constant/route";


export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          <Redirect from="/" to={MANAGE_ORDERS_URL} />
        }
        <Redirect to="error/error-v2" />
      </Switch>
    </Suspense>
  );
}
