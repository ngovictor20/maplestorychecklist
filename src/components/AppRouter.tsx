import LandingPage from 'pages/LandingPage';
import React, { useState } from 'react'
import DailiesPage from 'pages/DailiesPage';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WeekliesPage from 'pages/WeekliesPage';
import Header from 'components/Header';
import { CharacterProvider } from 'providers/CharacterProvider';
import CharacterList from 'components/CharacterList';

const AppRouter = () => {
    //@ts-ignore
    const [characterList, setCharacterList] = useState(JSON.parse(localStorage.getItem("characters")));
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    console.log(characterList);
    return (
        <div>
            <Router>
                <Header />
                <CharacterList list={characterList}/>
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
                        <p>quiche</p>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default AppRouter;
