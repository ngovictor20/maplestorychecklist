import React from 'react';
import ChecklistItem from 'components/Checklist/ChecklistItem';
import SubChecklist from 'components/Checklist/SubChecklist';
import { useAppSelector } from 'redux/hooks';
import { selectChecklist, selectChecklistType } from 'redux/stateSlice';



const ChecklistRenderer: React.FC = () => {
    const checklistType = useAppSelector(selectChecklistType);
    const checklist = useAppSelector(selectChecklist);
    return (
        <div className="container w-full flex flex-col text-lg">
            {
                Object.entries(checklist[checklistType]).map(([field, value]) => {
                    if (typeof value !== 'boolean') {
                        return <SubChecklist label={field} checklist={value} key={field} />
                    } else {
                        return (
                            <ChecklistItem {...{ field, value }} key={field} />
                        )
                    }

                })
            }
        </div>
    )
}

export default ChecklistRenderer
