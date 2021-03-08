import React, { useEffect, useState } from 'react'
import { endOfToday } from 'date-fns';
import { calculateTimeLeft, formatToDate } from 'helpers/timeFunctions';

const Timer: React.FC = () => {
    const [timeUntilDailyReset, setTimeUntilDailyReset] = useState(calculateTimeLeft(endOfToday()));
    console.log(new Date().getUTCHours());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeUntilDailyReset(calculateTimeLeft(endOfToday()));
        }, 1000);
        return () => clearTimeout(timer);
    });
    return (
        <div>
            <p>
                {`Today's Reset - ${formatToDate(timeUntilDailyReset)}`}
            </p>
        </div>
    )
}

export default Timer
