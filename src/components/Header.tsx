import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="sticky top-0 z-40 h-14 px-36 flex-1 min-w-full flex items-center container bg-purple-400">
            <img src="/maplestory-icon.png" alt="Icon" width={32}>

            </img>
            <p className="text-xl">
                Maplelist
            </p>
            <Link to="/dailies" className="text-lg">
                Dailies
            </Link>
            <Link to="/weeklies" className="text-lg">
                Weeklies
            </Link>
            <Link to="/quiche" className="text-lg">
                Quiche
            </Link>
        </div>
    )
}

export default Header
