import React from 'react';
import { Checklist } from 'types';
import ChecklistItem from 'components/ChecklistItem';

interface ChecklistProps {
    checklist: Checklist;
}

const ChecklistRenderer: React.FC<ChecklistProps> = ({ checklist }) => {
    return (
        <div className="container w-full flex flex-col text-lg">
            {
                Object.entries(checklist).map(([field, value]) => {
                    return (
                        <ChecklistItem {...{field,value}} key={field}></ChecklistItem>
                    )
                })
            }
        </div>
    )
}

export default ChecklistRenderer
