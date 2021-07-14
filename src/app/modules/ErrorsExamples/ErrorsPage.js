import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ErrorPage2 } from "./ErrorPage2";


export default function ErrorsPage() {
  return (
    <Switch>
      <Redirect from="/error" exact={true} to="/error/error-v2" />
      <Route path="/error/error-v2" component={ErrorPage2} />
    </Switch>
  );
}
