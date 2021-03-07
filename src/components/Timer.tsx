import React, { useEffect, useState } from 'react'
import { differenceInMilliseconds, endOfISOWeek, endOfToday } from 'date-fns';

const Timer: React.FC = () => {
    const calculateTimeLeft = (resetDate: Date) => {
        const currentDate = new Date();
        const difference = differenceInMilliseconds(resetDate, currentDate);
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }
    const [timeUntilDailyReset, setTimeUntilDailyReset] = useState(calculateTimeLeft(endOfToday()));
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeUntilDailyReset(calculateTimeLeft(endOfToday()));
        }, 1000);
        return () => clearTimeout(timer);
    });
    return (
        <div>
            {JSON.stringify(timeUntilDailyReset)}
        </div>
    )
}

export default Timer
