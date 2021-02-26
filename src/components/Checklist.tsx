import React from 'react';
import checklist from 'config/checklists.json';

const Checklist = () => {
    return (
        <div>
            {
                JSON.stringify(checklist)
            }
        </div>
    )
}

export default Checklist
