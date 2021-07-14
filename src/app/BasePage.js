import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { URL_FINANCIAL_REPORT } from "../_metronic/_assets/js/components/constant/route";
import FinancialReportPage from "./modules/FinancialReport/pages/financialReportPage";


export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect from="/" to={URL_FINANCIAL_REPORT.BASE_URL} />
        }
        <ContentRoute path={URL_FINANCIAL_REPORT.BASE_URL} component={FinancialReportPage} />

        <Redirect to="error/error-v2" />
      </Switch>
    </Suspense>
  );
}
