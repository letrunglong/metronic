import { Grid } from "@material-ui/core";
import React, { Suspense } from "react";
import { useEffect } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute, LayoutSplashScreen } from "../../../../_metronic/layout";
import { URL_FINANCIAL_REPORT } from "../../../../_metronic/_assets/js/components/constant/route";
import CashFlowPage from "./cash-flow/CashFlowPage";
import ProfitLossPage from "./profit-loss/ProfitLossPage";

export default function FinancialReportPage() {
    useEffect(() => {
        console.log("abcd");
    }, [])
    return <Suspense fallback={<LayoutSplashScreen />}>
        <Switch>
            <Redirect
                exact={true}
                from={URL_FINANCIAL_REPORT.BASE_URL}
                to={URL_FINANCIAL_REPORT.CASH_FLOW}
            />
            <Grid item xs={12}>
                <ContentRoute path={URL_FINANCIAL_REPORT.CASH_FLOW} component={CashFlowPage} />
                <ContentRoute path={URL_FINANCIAL_REPORT.PROFIT_LOSS} component={ProfitLossPage} />
            </Grid>
        </Switch>
    </Suspense>
}
