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
            <p>
                {`Time Until Today's Reset ${timeUntilDailyReset.days} Days, ${timeUntilDailyReset.hours}:${timeUntilDailyReset.minutes}:${timeUntilDailyReset.seconds}`}
            </p>
        </div>
    )
}

export default Timer
