import React from 'react'
import { useAppDispatch } from 'redux/hooks';
import { setChecklistType } from 'redux/stateSlice';
import { ChecklistType } from 'types';
import useDialog from 'components/Dialog/useDialog';
import { DialogType } from './Dialog/types';

const Header = () => {
    const dispatch = useAppDispatch();
    const {renderDialog,toggleDialog} = useDialog();
    return (
        <div className="sticky top-0 z-30 h-14 px-36 flex-1 min-w-full flex items-center container bg-purple-500 text-white">
            {renderDialog()}
            <img src={`${process.env.PUBLIC_URL}/maplestory-icon.png`} alt="Icon" className="w-7 h-7"/>
            <p className="text-xl">
                Maplelist
            </p>
            <div onClick={() => { dispatch(setChecklistType(ChecklistType.dailyChecklist)) }} className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-20 cursor-pointer">
                Dailies
            </div>
            <div onClick={() => { dispatch(setChecklistType(ChecklistType.weeklyBosses)) }} className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5 cursor-pointer">
                Weeklies
            </div>
            <div onClick={() => { dispatch(setChecklistType(ChecklistType.shiftChecklist)) }} className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5 cursor-pointer">
                Shift
            </div>
            <div onClick={()=>{
                toggleDialog(DialogType.deleteStorage);
            }} className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5 cursor-pointer">
                Clear Character Data
            </div>
        </div>
    )
}

export default Header
