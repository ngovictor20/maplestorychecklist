import { differenceInMilliseconds } from "date-fns";
interface TimeLeft {
  days: number;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

const calculateTimeLeft = (resetDate: Date) => {
  const currentDate = new Date();
  const difference = differenceInMilliseconds(resetDate, currentDate);
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};
const formatToDate = (timeLeft: TimeLeft) => {
  let { hours, minutes, seconds } = timeLeft;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${hours}:${minutes}:${seconds}`;
};

export { calculateTimeLeft, formatToDate };
