import React from 'react'
import checklist from 'config/checklists.json';

const WeekliesPage = () => {
    const weeklyBosses = checklist.weeklyBosses;

    return (
        <div>
            {
                Object.entries(weeklyBosses).map(([item,value])=>{
                    return (<div>
                        <input type="checkbox" className="rounded text-pink-500" defaultChecked={value}/>
                        <label>{item}</label>
                    </div>)
                })
            }
        </div>
    )
}

export default WeekliesPage
