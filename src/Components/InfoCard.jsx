import React from "react";
import "../style/dashboard_aside.scss";

export default function InfoCard({ label, icon, value, unit }) {
  return (
    <div className="information">
      <div className={`information--user--${label.toLowerCase()}`}>
        <img src={icon} alt={label} />
      </div>
      <div>
        {unit === 'kCal' ? (
          <p className="info-gramme">{value}kCal</p>
        ) : (
          <p className="info-gramme">{value}g</p>
        )}
        <p className="info-type">{label}</p>
      </div>
    </div>
  );
}
