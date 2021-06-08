import React from 'react'
import {Switch ,Route, Redirect} from 'react-router-dom'
import {CreatePage} from "./pages/CreatePage";
import {ComparisonPage} from "./pages/ComparisonPage";


export  const useRoutes = () => {

    //Допилить функционал доступа к Create
    return(
        <Switch>
            <Route path="/" exact>
                <ComparisonPage/>
            </Route>
            {/*<Route path="/compare" exact>*/}
            {/*    <ComparisonPage/>*/}
            {/*</Route>*/}
            {/*<Route path="/create" exact>*/}
            <Route path="/create" exact>
                <CreatePage/>
            </Route>
            <Redirect to = "/"/>
        </Switch>
    )
}