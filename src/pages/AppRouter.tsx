import LandingPage from 'pages/LandingPage';
import React from 'react'
import Header from 'components/Header';
import CharacterList from 'components/Character/CharacterList';
import ChecklistRenderer from '../components/Checklist/ChecklistRenderer';

const MainPage = () => {

    return (
        <div>
                <Header />
                <div className="lg:z-50 max-w-8xl px-36 container min-w-full h-screen">
                    <CharacterList />
                    <ChecklistRenderer/>
                </div>
        </div>
    )
}
export default MainPage;
