import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="sticky top-0 z-40 h-14 px-36 flex-1 min-w-full flex items-center container bg-purple-500 text-white">
            <img src="/maplestory-icon.png" alt="Icon" width={32}>

            </img>
            <p className="text-xl">
                Maplelist
            </p>
            <Link to="/dailies" className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-20">
                Dailies
            </Link>
            <Link to="/weeklies" className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5">
                Weeklies
            </Link>
            <Link to="/quiche" className="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-lg ml-5">
                Quiche
            </Link>
        </div>
    )
}

export default Header
