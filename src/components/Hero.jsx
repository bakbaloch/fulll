import React, { useState } from "react";
import axios from "axios";
import "./Hero.css";
import hero from "../assets/11.png";
import hero2 from "../assets/22.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) return;
    try {
      await axios.post("mongodb+srv://iamsulemanbaloch:SullyBaloch8199@cluster0.xval7vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { email });
      setMessage("You have successfully joined the waitlist!");
      setEmail("");
    } catch (error) {
      setMessage("Failed to join the waitlist. Please try again.");
    }
  };

  return (
    <section className="hero" id="services">
      <div className="hero-content">
        <h1>Your AI-Powered Health Companion</h1>
        <p>
          Understand your doctor’s advice, translate in real-time, and manage your medical records—effortlessly.
        </p>
        {!showInput ? (
          <button className="hero-button" onClick={() => setShowInput(true)}>
            Join the Waitlist
          </button>
        ) : (
          <div className="email-input-container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        )}
        {message && <p className="message">{message}</p>}
        <p>Get Early Access | Be the First to Try clairdoc</p>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Healthcare illustration" />
        <img src={hero2} alt="Healthcare illustration" />
      </div>
    </section>
  );
};

export default Hero;
