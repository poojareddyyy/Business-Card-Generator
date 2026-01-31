import React from "react";

const BusinessCard = ({ Values }) => {
  const { Name, Designation, Phone, Email, LinkedIn } = Values;

  return (
    <article className="BusinessCard template-modern">
      {/* Name */}
      <h3>{Name}</h3>

      {/* Designation (SEPARATE) */}
      <p className="designation">{Designation}</p>

      {/* Contact section (WRAPPED) */}
      <div className="contact">
        {Phone && (
          <p className="phone">
            <span className="icon">📞</span>
            {Phone}
          </p>
        )}

        {Email && (
          <p className="email">
            <span className="icon">✉️</span>
            {Email}
          </p>
        )}

        {LinkedIn && (
          <p className="linkedin">
            <span className="icon linkedin-icon">🌐</span>
            {LinkedIn}
          </p>
        )}
      </div>
    </article>
  );
};

export default BusinessCard;
