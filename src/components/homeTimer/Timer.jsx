import { useState } from "react";
import "./Timer.css";

function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimeOver, setIsTimeOver] = useState(false);
  setInterval(() => {
    const eventDate = new Date("2024-11-12T00:00:00");
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
              <div id="timer-space" className="time-info">DAYS</div>
              <div id="timer-space" className="time-data">{days}</div>
            </div>
            <div className="hours">
              <div id="timer-space" className="time-info">HOURS</div>
              <div id="timer-space" className="time-data">{hours}</div>
            </div>
            <div className="minutes">
              <div id="timer-space" className="time-info">MINUTES</div>
              <div id="timer-space" className="time-data">{minutes}</div>
            </div>
            <div className="seconds">
              <div id="timer-space" className="time-info">SECONDS</div>
              <div id="timer-space" className="time-data">{seconds}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;
