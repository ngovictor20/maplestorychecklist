import React, { useState } from 'react'
import CharacterList from 'components/Character/CharacterList'


const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="border-r-2 bottom-0 w-1/6 left-0 min-h-screen relative">
            <img src={`${process.env.PUBLIC_URL}/chevron-${isExpanded ? "left" : "right"}.svg`} onClick={() => { setIsExpanded(!isExpanded) }} className="absolute cursor-pointer right-1 pt-3" alt="expand" />
            <div className="pt-6">
                <CharacterList />
            </div>
        </div>
    )
}

export default Sidebar
