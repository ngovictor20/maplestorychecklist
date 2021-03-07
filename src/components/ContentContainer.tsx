import React from 'react'
import ChecklistRenderer from 'components/Checklist/ChecklistRenderer'
import Timer from 'components/Timer'

const ContentContainer = () => {
    return (
        <div className="py-10 px-20">
            
            <ChecklistRenderer />
            <div>
                <Timer/>
            </div>
        </div>
    )
}

export default ContentContainer
