import React from 'react';
import { Checklist } from 'types';

interface ChecklistProps {
    checklist: Checklist;
}

const ChecklistRenderer: React.FC<ChecklistProps> = ({ checklist }) => {
    return (
        <div>
            <p>{JSON.stringify(checklist)}</p>
            {
                Object.entries(checklist).map(([item, value]) => {
                    return (
                    <div key={item}>
                        <input type="checkbox" className="rounded text-pink-500" checked={value} />
                        <label>{item}</label>
                    </div>)
                })
            }
        </div>
    )
}

export default ChecklistRenderer
