import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
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

export default LandingPage
