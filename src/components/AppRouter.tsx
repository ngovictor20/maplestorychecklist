import LandingPage from 'pages/LandingPage';
import React, { useState } from 'react'
import DailiesPage from 'pages/DailiesPage';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WeekliesPage from 'pages/WeekliesPage';
import Header from 'components/Header';
import CharacterList from 'components/CharacterList';
import { CharacterProvider } from 'providers/CharacterProvider';

const AppRouter = () => {
    //@ts-ignore
    const [characterList, setCharacterList] = useState(JSON.parse(localStorage.getItem("characters")));
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    console.log(characterList);
    return (
        <div>
            <Router>
                <Header />
                <CharacterProvider value={{ characterList, currentCharIndex, setCurrentCharIndex }}>
                    <CharacterList list={characterList} currentIndex={currentCharIndex} setCharIndex={setCurrentCharIndex} />
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
                </CharacterProvider>
            </Router>
        </div>
    )
}
export default AppRouter;
