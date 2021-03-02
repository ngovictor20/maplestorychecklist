import React, { useEffect, useState } from 'react'

interface SubChecklistProps {
    field: string;
    value: boolean;
    globalChecked: boolean;
    onChangeHandler: (field: string, value: boolean) => void;
}

const SubChecklistItem: React.FC<SubChecklistProps> = ({ field, globalChecked, value, onChangeHandler }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(globalChecked);
    }, [globalChecked])

    useEffect(() => {
        setChecked(value);
    }, [value])
    return (
        <div>
            <label className="inline-flex items-center h-8 cursor-pointer">
                <input type="checkbox" className="rounded text-pink-500" checked={checked} onChange={(e) => {
                    console.log(e.target.checked)
                    setChecked(e.target.checked);
                    onChangeHandler(field, e.target.checked);
                }} />
                <span className="ml-2">{field}</span>
            </label>
        </div>
    )
}

export default SubChecklistItem
