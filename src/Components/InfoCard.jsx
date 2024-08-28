import React from "react";

export default function InfoCard({ label, value, unit }) {
  return (
    <div className="d-flex flex-column m-3 p-3  bg-secondary w-50">
      <span className="fw-bold">
        {value} {unit}
      </span>
      <span> {label}</span>
    </div>
  );
}
