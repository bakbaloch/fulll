import React from 'react';
import './HowItWorks.css';
import code from '../assets/code.png';
import summary from '../assets/summary.png'
import lock from '../assets/lock.png'
import history from '../assets/history.png'


const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how">
      <h2>How it works</h2>
      
      <div className="step">
        <div className="step-text">
          <h3><span className="step-number">1</span>  AI listens & transcribes doctor visits.</h3>
          <p>Captures doctor-patient conversations in real-time, transcribes them, and generates structured, easy-to-read summaries highlighting key details like diagnosis, treatment plans, and follow-up instructions.</p>
        </div>
        <div className="step-image">
          <img  src={code} alt="Enter code" />
        </div>
      </div>

      <div className="step">
        <div className="step-image">
          <img  src={summary}alt="Find hotel" />
        </div>
        <div className="step-text">
          <h3><span className="step-number">2</span> Converts medical jargon into simple summaries.</h3>
          <p>Automatically identifies and simplifies complex medical jargon using plain language and visual aids (e.g., diagrams, illustrations, or interactive elements) to improve patient comprehension.</p>
        </div>
      </div>

      <div className="step">
        <div className="step-text">
          <h3><span className="step-number">3</span>Organizes medical records into a secure digital vault.</h3>
          <p>Allows patients to upload, store, and organize all their medical records (e.g., prescriptions, test results, visit notes) in one secure location, with easy sharing options for healthcare providers and caregivers.</p>
        </div>
        <div className="step-image">
          <img  src={lock} alt="Apply savings" />
        </div>
      </div>

      <div className="step">
        <div className="step-text">
          <h3><span className="step-number">4</span>Generates a QR code for instant access to your health history.</h3>
          <p>Generates a secure, scannable QR code that gives doctors and healthcare providers instant access to a patient’s essential health information, including past diagnoses, medications, allergies, recent lab results, and emergency contacts, reducing paperwork and repeated questioning.</p>
        </div>
        <div className="step-image">
          <img  src={history} alt="Apply savings" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
