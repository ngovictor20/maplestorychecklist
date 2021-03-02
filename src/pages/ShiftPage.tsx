import ChecklistRenderer from 'components/Checklist/ChecklistRenderer';
import React from 'react'
import { useAppSelector } from 'redux/hooks';

const ShiftPage = () => {
    const { shiftChecklist } = useAppSelector(state=>state.checklist);
    return (
        <div>
            <ChecklistRenderer checklist={shiftChecklist}/>
        </div>
    )
}

export default ShiftPage
