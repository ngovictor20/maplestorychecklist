import React from 'react'
import ChecklistRenderer from 'components/Checklist/ChecklistRenderer'
import Timer from 'components/Timer'

const ContentContainer = () => {
    return (
        <div className="py-10 px-20 relative">
            
            <ChecklistRenderer />
            <div className="absolute right-40 top-10">
                <Timer/>
            </div>
        </div>
    )
}

export default ContentContainer
