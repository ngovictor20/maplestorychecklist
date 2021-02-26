import React from 'react'
import checklist from 'config/checklists';
import ChecklistRenderer from 'components/ChecklistRenderer';

const DailiesPage = () => {
    const dailyChecklist = checklist.dailyChecklist;

    return (
        <div>
            <ChecklistRenderer checklist={dailyChecklist}/>
        </div>
    )
}

export default DailiesPage
