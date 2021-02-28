import LandingPage from 'pages/LandingPage';
import React from 'react'
import DailiesPage from 'pages/DailiesPage';
import WeekliesPage from 'pages/WeekliesPage';
import Header from 'components/Header';
import CharacterList from 'components/CharacterList';
import ShiftPage from 'pages/ShiftPage';
import { useAppSelector } from 'redux/hooks';
import { ChecklistType } from 'types';

const AppRouter = () => {
    const checklistType = useAppSelector(state => state.checklistType);
    const renderPage = () => {
        switch (checklistType) {
            case ChecklistType.dailyChecklist:
                return <DailiesPage/>;
            case ChecklistType.weeklyBosses:
                return <WeekliesPage/>;
            case ChecklistType.shiftChecklist:
                return <ShiftPage/>;
            default:
                return <LandingPage/>;
        }
    }
    return (
        <div>
                <Header />
                <div className="lg:z-50 max-w-8xl px-36 container min-w-full h-screen">
                    <CharacterList />
                    {renderPage()}
                </div>
        </div>
    )
}
export default AppRouter;
