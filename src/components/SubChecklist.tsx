import React, { useState } from 'react'
import { Checklist } from 'types'
import SubChecklistItem from 'components/SubChecklistItem';

interface ChecklistProps {
    label:string;
    checklist: Checklist;
}

const SubChecklist: React.FC<ChecklistProps> = ({ checklist,label }) => {
    const [allChecked, setAllChecked] = useState(false);
    console.log(checklist)
    return (
        <div>
            <label className="inline-flex items-center h-8 cursor-pointer">
            <input type="checkbox" className="rounded text-pink-500" checked={allChecked} onChange={(e) => {
                setAllChecked(e.target.checked);
                // dispatch(updateChecklistItem({field}));
            }} />
            <span className="ml-2">{label}</span>
            </label>
            <div className="ml-10">
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
        </div>
    )
}
interface ChecklistProps {
    checklist: Checklist;
}

export default SubChecklist
