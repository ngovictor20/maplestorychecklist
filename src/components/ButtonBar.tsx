import React from 'react'
import { resetChecklists } from 'redux/stateSlice'
import { useAppDispatch } from 'redux/hooks'

const ButtonBar = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="p2 sm:p-3 lg:p-6 flex flex-col items-center gap-3 text-xs sm:text-sm lg:text-base">
            <div onClick={() => {
                dispatch(resetChecklists());
            }} className="w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2">
                Reset All Checklists
            </div>
            <div onClick={() => {
                dispatch(resetChecklists());
            }} className="w-full lg:w-4/5 h-10 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md hover:ring-2">
                Reset Current Checklist
            </div>
        </div>
    )
}

export default ButtonBar
