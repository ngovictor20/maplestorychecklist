import React, { useState } from 'react'
import { updateChecklistItem } from 'redux/stateSlice';
import { useAppDispatch } from 'redux/hooks';
interface ChecklistItemProps {
    field: string;
    value: boolean;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ field, value }) => {
    const [checked, setChecked] = useState(value);
    const dispatch = useAppDispatch();

    return (
        <div key={field}>
            <input type="checkbox" className="rounded text-pink-500" checked={checked} onChange={(e) => {
                dispatch(updateChecklistItem({field, type: "dailyChecklist"}))
                setChecked(e.target.checked);
            }} />
            <label>{field}</label>
        </div>
    )
}

export default ChecklistItem
