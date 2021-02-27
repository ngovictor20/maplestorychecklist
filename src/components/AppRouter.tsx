import LandingPage from 'pages/LandingPage';
import React from 'react'
import DailiesPage from 'pages/DailiesPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WeekliesPage from 'pages/WeekliesPage';
import Header from 'components/Header';
import CharacterList from 'components/CharacterList';
import { Provider } from 'react-redux';
import store from 'redux/store';
import ShiftPage from 'pages/ShiftPage';

const AppRouter = () => {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Header />
                    <CharacterList />
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route exact path="/dailies">
                            <DailiesPage />
                        </Route>
                        <Route exact path="/weeklies">
                            <WeekliesPage />
                        </Route>
                        <Route exact path="/quiche">
                            <ShiftPage />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}
export default AppRouter;
