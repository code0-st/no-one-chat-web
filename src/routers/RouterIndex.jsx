import React, {Suspense} from "react";
import {Loader} from "../components/Loader/Loader";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {ROUTE_PATHS} from "./paths";
import {Params} from "../components/pages/Params/Params";
import {Dialog} from "../components/pages/Dialog/Dialog";

export const RouterIndex = ({appLoading}) => {
    if (appLoading) {
        return <Loader fullScreen/>
    }
    return <BrowserRouter>
        <Suspense fallback={Loader}>
            <Route exact
                   path={'/'}
                   component={() => <Redirect to={ROUTE_PATHS.params}/>}
            />
            <Switch>
                <Route exact
                       path={ROUTE_PATHS.params}
                       component={Params}
                />
                <Route exact
                       path={'/chat/:id'}
                       component={Dialog}
                />
            </Switch>
        </Suspense>
    </BrowserRouter>
}
