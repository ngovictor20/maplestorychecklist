import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
            <div className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
                <Link to="/dailies">
                    Dailies
            </Link>
                <Link to="/weeklies">
                    Weeklies
            </Link>
                <Link to="/quiche">
                    Quiche
            </Link>
            </div>
    )
}

export default Header
