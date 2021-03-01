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
                    console.log(field, typeof value)
                    if(typeof value !== 'boolean'){
                        return <SubChecklist label= {field} checklist={value}/>
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
