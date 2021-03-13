import React, { useEffect, useState } from "react";
import { endOfToday } from "date-fns";
import { calculateTimeLeft, formatToDate } from "helpers/timeFunctions";

const Timer: React.FC = () => {
  const [timeUntilDailyReset, setTimeUntilDailyReset] = useState(
    calculateTimeLeft(endOfToday())
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeUntilDailyReset(calculateTimeLeft(endOfToday()));
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="p-6">
      <h2 className="text-xl sm:text-2xl lg:text-5xl leading-none font-bold text-gray-900 tracking-tight mb-5">
        Timers
      </h2>
      <p className="text-sm sm:text-base lg:text-lg">
        {`Today's Reset - ${formatToDate(timeUntilDailyReset)}`}
      </p>
    </div>
  );
};

export default Timer;
