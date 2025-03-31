import React from "react";
import "./Services.css"; // Import the CSS file

const services = [
  {
    title: "Do you remember what doctor said?",
    description: "80% of patients forget what doctors say.",
    icon: "🔍",
  },
  {
    title: "Who understands medical terms?",
    description: "Medical jargon is confusing and overwhelming.",
    icon: "💊",
  },
  {
    title: "Language barrier is real",
    description: "Non-English speakers struggle to communicate with doctors.",
    icon: "📄",
  },
  {
    title: "Where is your last medical record?",
    description: "Medical records are scattered, making every visit frustrating.",
    icon: "📄",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">The Problem – Why This Matters</h2>
      <p className="services-subtext">
      💔 Healthcare is broken for patients.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
