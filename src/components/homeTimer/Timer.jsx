import { useState } from "react";
import "./Timer.css"

function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isTimeOver, setIsTimeOver] = useState(false);
    setInterval(() => {
        const eventDate = new Date("2023-11-02T00:00:00");
        const currentDate = new Date();
        const totalSeconds = (eventDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
        if (days < 10) {
            setDays("0" + days);
        }
        else {
            setDays(days);
        }
        if (hours < 10) {
            setHours("0" + hours);
        }
        else {
            setHours(hours);
        }
        if (minutes < 10) {
            setMinutes("0" + minutes);
        }
        else {
            setMinutes(minutes);
        }
        if (seconds < 10) {
            setSeconds("0" + seconds);
        }
        else {
            setSeconds(seconds);
        }
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            setIsTimeOver(true);
        }
    }, 1000);

    return (
        <div className="timer">
            {!isTimeOver && <><div className="timer-container left">
                <div className="days">
                    <h1>{days}</h1>
                    <h2>Days</h2>
                </div>
                <div className="minutes">
                    <h1>{minutes}</h1>
                    <h2>Minutes</h2>
                </div>
            </div>
                <div className="centerLines">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
                <div className="timer-container">
                    <div className="hours">
                        <h1>{hours}</h1>
                        <h2>Hours</h2>
                    </div>
                    <div className="seconds">
                        <h1>{seconds}</h1>
                        <h2>Seconds</h2>
                    </div>
                </div></>}
        </div>
    )
}

export default Timer
