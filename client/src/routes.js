import React from 'react'
import {Switch ,Route, Redirect} from 'react-router-dom'
import {CreatePage} from "./pages/CreatePage";
import {ComparisonPage} from "./pages/ComparisonPage";
import {SensorsPage} from "./pages/SensorsPage";
import {Navbar} from "./сomponents/Navbar";


export  const useRoutes = () => {

    //Допилить функционал доступа к Create
    return(
        <div>
            <Navbar></Navbar>
            <Switch>
                <Route path="/comparison" exact>
                    <ComparisonPage/>
                </Route>
                {/*<Route path="/compare" exact>*/}
                {/*    <ComparisonPage/>*/}
                {/*</Route>*/}
                {/*<Route path="/create" exact>*/}
                <Route path="/create" exact>
                    <CreatePage/>
                </Route>
                <Route path="/sensors" exact>
                    <SensorsPage/>
                </Route>
                <Redirect to = "/"/>
            </Switch>
        </div>
    )
}