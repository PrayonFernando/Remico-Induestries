import React from "react";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <h2 className="sectionTitle" style={{ fontSize: 20, marginBottom: 6 }}>
        {title}
      </h2>
      {subtitle ? <p className="sectionSub">{subtitle}</p> : null}
    </div>
  );
}
