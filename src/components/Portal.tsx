import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Portal = () => {
    return (
        <div>
            <Router>
                <Link to="/dailies">
                    Dailies
                </Link>
                <Link to="/weeklies">
                    About
                </Link>
                <Link to="/quiche">
                    Users
                </Link>
            </Router>
        </div>
    )
}
export default Portal;
