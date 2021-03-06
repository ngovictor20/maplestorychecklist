import React from 'react'
import Header from 'components/Header';
import CharacterList from 'components/Character/CharacterList';
import ChecklistRenderer from '../components/Checklist/ChecklistRenderer';
import Sidebar from 'components/Sidebar';
import useDialog from 'components/Dialog/useDialog';
import { DialogType } from 'components/Dialog/types';

const MainPage = () => {
    const { renderDialog, toggleDialog } = useDialog();
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="lg:z-50 max-w-8xl px-36 container min-w-full h-screen">
            {renderDialog()}
                <button onClick={() => { toggleDialog(DialogType.addCharacter) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 w-40 absolute right-40">
                    Add Character
                </button>
                <div>
                    <ChecklistRenderer />
                </div>
            </div>
        </div>
    )
}
export default MainPage;
