import React from 'react'
import ChecklistRenderer from 'components/Checklist/ChecklistRenderer'
import Timer from 'components/Timer'
import { resetChecklists } from 'redux/stateSlice'
import { useAppDispatch } from 'redux/hooks'

const ContentContainer = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="py-10 px-20 relative">
            <ChecklistRenderer />
            <div className="absolute right-40 top-10">
                <Timer/>
            </div>
            <div onClick={()=>{
                dispatch(resetChecklists());
            }}>
                Reset Current Checklist
            </div>
        </div>
    )
}

export default ContentContainer
