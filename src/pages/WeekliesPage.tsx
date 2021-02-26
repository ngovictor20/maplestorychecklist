import React from 'react'
import checklist from 'config/checklists';
import ChecklistRenderer from 'components/ChecklistRenderer';

const WeekliesPage = () => {
    const weeklyBosses = checklist.weeklyBosses;

    return (
        <div>
             <ChecklistRenderer checklist={weeklyBosses}/>
        </div>
    )
}

export default WeekliesPage
