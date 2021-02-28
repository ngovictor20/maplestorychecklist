import React from 'react'
import { useAppDispatch } from 'redux/hooks';
import { setChecklistType } from 'redux/stateSlice';
import { ChecklistType } from 'types';

const Header = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="sticky top-0 z-30 h-14 px-36 flex-1 min-w-full flex items-center container bg-purple-500 text-white">
            <img src={`${process.env.PUBLIC_URL}/maplestory-icon.png`} alt="Icon" width={32}>

            </img>
            <p className="text-xl">
                Maplelist
            </p>
            <div onClick={()=>{dispatch(setChecklistType(ChecklistType.dailyChecklist))}} className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-20">
                Dailies
            </div>
            <div onClick={()=>{dispatch(setChecklistType(ChecklistType.weeklyBosses))}} className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5">
                Weeklies
            </div>
            <div onClick={()=>{dispatch(setChecklistType(ChecklistType.shiftChecklist))}} className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5">
                Quiche
            </div>
        </div>
    )
}

export default Header
