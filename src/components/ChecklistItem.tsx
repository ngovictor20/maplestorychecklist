import React, { useEffect, useState } from 'react'
import { updateChecklistItem } from 'redux/stateSlice';
import { useAppDispatch } from 'redux/hooks';
interface ChecklistItemProps {
    field: string;
    value: boolean;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ field, value }) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setChecked(value);
    }, [value])
    return (
        <div key={field}>
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

export default ChecklistItem
