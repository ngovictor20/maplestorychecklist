import React from 'react'
import ChecklistRenderer from 'components/Checklist/ChecklistRenderer';
import { useAppSelector } from 'redux/hooks';

const WeekliesPage = () => {
    const {weeklyBosses} = useAppSelector(state=>state.checklist);
    return (
        <div>
             <ChecklistRenderer checklist={weeklyBosses}/>
        </div>
    )
}

export default WeekliesPage
