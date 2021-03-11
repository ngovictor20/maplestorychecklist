import React from 'react'
import { clearExistingChecklist, clearCharacterChecklist } from 'redux/stateSlice'
import { useAppDispatch } from 'redux/hooks'
import useDialog from 'components/Dialog/useDialog';
import { DialogType } from 'components/Dialog/types';

const ButtonBar = () => {
    const dispatch = useAppDispatch();
    const { renderDialog, toggleDialog } = useDialog();
    return (
        <div className="p2 sm:p-3 lg:p-6 flex flex-col items-center gap-3 text-xs sm:text-sm lg:text-base">
            {renderDialog()}
            <div onClick={() => {
                toggleDialog(DialogType.resetAllChecklists)
            }} className="w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2">
                Reset All Checklists
            </div>
            <div onClick={() => {
                dispatch(clearExistingChecklist());
            }} className="w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2">
                Clear Checklist
            </div>
            <div onClick={() => {
                dispatch(clearCharacterChecklist());
            }} className="w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2">
               Clear All Checklist
            </div>
        </div>
    )
}

export default ButtonBar
