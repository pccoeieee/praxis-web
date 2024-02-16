import React, { useState, useRef, useEffect } from 'react';
import "./Timer.css";

const Timer = ({ deadline }) => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const calculateTimeRemaining = (endTime) => {
        const total = Date.parse(endTime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return { days, hours, minutes, seconds };
    }

    const startTimer = (endTime) => {
        const intervalId = setInterval(() => {
            const { days, hours, minutes, seconds } = calculateTimeRemaining(endTime);
            setTimer({ days, hours, minutes, seconds });
            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(intervalId);
            }
        }, 1000);
        Ref.current = intervalId;
    }

    useEffect(() => {
        startTimer(deadline);
        return () => clearInterval(Ref.current);
    }, [deadline]);

    return (
        <div className="Codedamn App">
            <div className="timer-heading">
                    <h1>REGISTRATIONS CLOSING IN</h1>
                </div>
            <div className="timer-container">
                {/*<div className="timer-item">
                    <h2>{timer.days}</h2>
                    <p><b>DAY</b></p>
                </div>
                <div className="timer-item">
                    <h2>:</h2>
                </div> */}
                <div className="timer-item">
                    <h2>{timer.hours}</h2>
                    <p><b>HOURS</b></p>
                </div>
                <div className="timer-item">
                    <h2>:</h2>
                </div>
                <div className="timer-item">
                    <h2>{timer.minutes}</h2>
                    <p><b>MINUTES</b></p>
                </div>
                <div className="timer-item">
                    <h2>:</h2>
                </div>
                <div className="timer-item">
                    <h2>{timer.seconds}</h2>
                    <p><b>SECONDS</b></p>
                </div>
            </div>
        </div>
    );
}

export default Timer;