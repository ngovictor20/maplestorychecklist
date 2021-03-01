import React from 'react';
import { Checklist } from 'types';
import ChecklistItem from 'components/ChecklistItem';
import SubChecklist from './SubChecklist';

interface ChecklistProps {
    checklist: Checklist;
}


const ChecklistRenderer: React.FC<ChecklistProps> = ({ checklist }) => {
    return (
        <div className="container w-full flex flex-col text-lg">
            {
                Object.entries(checklist).map(([field, value]) => {
                    if(typeof value === 'object'){
                        return <SubChecklist checklist={value}/>
                    }else{
                        return (
                            <ChecklistItem {...{field,value}} key={field}/>
                        )
                    }
                    
                })
            }
        </div>
    )
}

export default ChecklistRenderer
