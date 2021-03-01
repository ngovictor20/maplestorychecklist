import React from 'react'

interface SubChecklistProps{
    field: string;
    value: boolean;
    globalChecked: boolean;
}

const SubChecklistItem:React.FC<SubChecklistProps> = ({field,globalChecked,value}) => {
    return (
        <div>
            <label className="inline-flex items-center h-8 cursor-pointer">
            <input type="checkbox" className="rounded text-pink-500" checked={checked} onChange={(e) => {
                setChecked(e.target.checked);
                dispatch(updateChecklistItem({field}));
            }} />
            <span className="ml-2">{field}</span>
            </label>
        </div>
    )
}

export default SubChecklistItem
