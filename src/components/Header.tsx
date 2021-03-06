import React from 'react'
import { useAppDispatch } from 'redux/hooks';
import { setChecklistType } from 'redux/stateSlice';
import { ChecklistType } from 'types';
import useDialog from 'components/Dialog/useDialog';
import { DialogType } from './Dialog/types';

const NavItemClass = "hover:bg-accent-grey h-fullcursor-pointer px-2 flex items-center";

const Header = () => {
    const dispatch = useAppDispatch();
    const { renderDialog, toggleDialog } = useDialog();
    return (
        <div className="sticky top-0 z-30 h-20 px-36 flex-1 min-w-full flex container bg-header-grey text-white justify-between">
            {renderDialog()}
            <div className="flex items-center ">
                <img src={`${process.env.PUBLIC_URL}/maplestory-icon.png`} alt="Icon" className="w-7 h-7" />
                <p className="text-2xl">
                    Maplelist
                </p>
            </div>
            <div className="flex justify space-x-6 h-full text-xl text-white ">
                <div onClick={() => { dispatch(setChecklistType(ChecklistType.dailyChecklist)) }} className={NavItemClass}>
                    <p>Dailies</p>
                </div>
                <div onClick={() => { dispatch(setChecklistType(ChecklistType.weeklyBosses)) }} className={NavItemClass}>
                    <p>Weeklies</p>
                </div>
                <div onClick={() => { dispatch(setChecklistType(ChecklistType.shiftChecklist)) }} className={NavItemClass}>
                    <p>Shift</p>
                </div>
                <div onClick={() => {
                    toggleDialog(DialogType.deleteStorage);
                }} className={NavItemClass}>
                    <p>Clear Data</p>
                </div>
            </div>
        </div>
    )
}

export default Header
