import React, { useEffect, useState } from 'react'

interface SubChecklistProps{
    field: string;
    value: boolean;
    globalChecked: boolean;
}

const SubChecklistItem:React.FC<SubChecklistProps> = ({field,globalChecked,value}) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(value);
    }, [value])

    useEffect(()=>{
        setChecked(globalChecked);
        //action
    }, [globalChecked])
    
    return (
        <div>
            <label className="inline-flex items-center h-8 cursor-pointer">
            <input type="checkbox" className="rounded text-pink-500" checked={checked} onChange={(e) => {
                console.log(e.target.checked)
                setChecked(!checked);
            }} />
            <span className="ml-2">{field}</span>
            </label>
        </div>
    )
}

export default SubChecklistItem
