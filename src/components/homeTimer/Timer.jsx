import { useState } from "react";
import "./Timer.css";

function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimeOver, setIsTimeOver] = useState(false);
  setInterval(() => {
    const eventDate = new Date("2024-11-02T00:00:00");
    const currentDate = new Date();
    const totalSeconds = (eventDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    if (days < 10) {
      setDays("0" + days);
    } else {
      setDays(days);
    }
    if (hours < 10) {
      setHours("0" + hours);
    } else {
      setHours(hours);
    }
    if (minutes < 10) {
      setMinutes("0" + minutes);
    } else {
      setMinutes(minutes);
    }
    if (seconds < 10) {
      setSeconds("0" + seconds);
    } else {
      setSeconds(seconds);
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      setIsTimeOver(true);
    }
  }, 1000);

  return (
    <div className="timer">
      {!isTimeOver && (
        <>
          <div className="timer-container">
            <div className="days">
              <h2 className="time-info">DAYS</h2>
              <h1>{days}</h1>
            </div>
            <div className="hours">
              <h2 className="time-info">HOURS</h2>
              <h1>{hours}</h1>
            </div>
            <div className="minutes">
              <h2 className="time-info">MINUTES</h2>
              <h1>{minutes}</h1>
            </div>
            <div className="seconds">
              <h2 className="time-info">SECONDS</h2>
              <h1>{seconds}</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;
