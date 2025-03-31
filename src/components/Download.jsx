import React from "react";
import "./Download.css";
import { useState, useEffect } from "react";
import "./CountdownTimer.css";


import downloadImage from '../assets/download.png';

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days} days ${hours} hours ${minutes} minutes ${secs} seconds`;
  };

  return <div className="countdown-timer">Apps releases in {formatTime(timeLeft)}</div>;
};

const Download = () => {
  return (
    <section className="download-section" id="solution">
      <div className="download-content">
        <h2 className="download-title"> The Solution – Meet clairdoc</h2>
        <h3>  An AI-powered assistant that simplifies healthcare.</h3>
        <p className="download-description">
  <strong>1. Live AI Translation</strong> – Understands doctor visits in your language.
</p>
        <p className="download-description">
        <strong> 2. Secure Medical Vault – </strong>Keeps all records in one place.
        </p>
        <p className="download-description">
        <strong>3. Instant QR Code Access – </strong>No more paperwork or repeating health history.
        </p>
      
        <CountdownTimer initialTime={90 * 24 * 3600} />
      </div>
      <div className="download-image">
        <img src={downloadImage} alt="Download our app" />
      </div>
    </section>
  );
};

export default Download;
