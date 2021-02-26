import LandingPage from 'pages/LandingPage';
import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/dailies">
                        <p>Hello</p>
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
