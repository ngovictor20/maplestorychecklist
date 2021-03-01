import React, { useState } from 'react'
import { Checklist } from 'types'
import SubChecklistItem from 'components/SubChecklistItem';

interface ChecklistProps {
    checklist: Checklist;
}

const SubChecklist: React.FC<ChecklistProps> = ({ checklist }) => {
    const [allChecked, setAllChecked] = useState(false);
    return (
        <div>
            {
                Object.entries(checklist).map(([field, value]) => {
                    if (typeof value === 'boolean') {
                        return <SubChecklistItem {...{ field, value, globalChecked: allChecked }} key={field} />
                    }else{
                        return undefined;
                    }
                })
            }
        </div>
    )
}
interface ChecklistProps {
    checklist: Checklist;
}

export default SubChecklist
