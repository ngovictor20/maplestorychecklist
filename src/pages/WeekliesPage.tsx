import React from 'react'
import ChecklistRenderer from 'components/ChecklistRenderer';
import { useAppSelector } from 'redux/hooks';

const WeekliesPage = () => {
    const {weeklyBosses} = useAppSelector(state=>state.checklist);
    console.log(weeklyBosses)
    return (
        <div>
             <ChecklistRenderer checklist={weeklyBosses}/>
        </div>
    )
}

export default WeekliesPage
