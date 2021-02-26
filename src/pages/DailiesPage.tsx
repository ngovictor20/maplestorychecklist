import React from 'react'
import checklist from 'config/checklists.json';

const DailiesPage = () => {
    const dailyChecklist = checklist.dailyChecklist;

    return (
        <div>
            {
                Object.entries(dailyChecklist).map(([item,value])=>{
                    return (<div>
                        <input type="checkbox" className="rounded text-pink-500" defaultChecked={value}/>
                        <label>{item}</label>
                    </div>)
                })
            }
        </div>
    )
}

export default DailiesPage
