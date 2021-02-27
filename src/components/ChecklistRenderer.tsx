import React from 'react';
import { Checklist } from 'types';
import ChecklistItem from 'components/ChecklistItem';

interface ChecklistProps {
    checklist: Checklist;
}

const ChecklistRenderer: React.FC<ChecklistProps> = ({ checklist }) => {
    return (
        <div>
            <p>{JSON.stringify(checklist)}</p>
            {
                Object.entries(checklist).map(([field, value]) => {
                    return (
                        <ChecklistItem {...{field,value}}></ChecklistItem>
                    )
                })
            }
        </div>
    )
}

export default ChecklistRenderer
