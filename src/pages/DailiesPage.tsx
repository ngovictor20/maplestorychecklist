import React from 'react'
import ChecklistRenderer from 'components/Checklist/ChecklistRenderer';
import {useAppSelector, useAppDispatch} from 'redux/hooks';

const DailiesPage = () => {
    const { dailyChecklist } = useAppSelector(state=>state.checklist);

    return (
        <div>
            <ChecklistRenderer checklist={dailyChecklist}/>
        </div>
    )
}

export default DailiesPage
