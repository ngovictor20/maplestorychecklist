import LandingPage from 'pages/LandingPage';
import React from 'react'
import DailiesPage from 'pages/DailiesPage';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WeekliesPage from 'pages/WeekliesPage';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/dailies">
                        <DailiesPage/>
                    </Route>
                    <Route exact path="/weeklies">
                        <WeekliesPage/>
                    </Route>
                    <Route exact path="/quiche">
                        <p>quiche</p>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default AppRouter;
