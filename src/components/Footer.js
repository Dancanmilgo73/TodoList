import React from "react";

export default function Footer({ completeItems }) {
  return (
    <div className="footer">
      <h3>Total Complete items: {completeItems.length}</h3>
    </div>
  );
}
