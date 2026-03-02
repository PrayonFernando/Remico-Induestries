import React from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    name: "Industrial Compressors",
    desc: "Air solutions for workshops, production lines, and utility operations.",
    tag: "Power & Utilities",
  },
  {
    name: "Material Handling Equipment",
    desc: "Support for movement, loading, and organization in industrial environments.",
    tag: "Handling",
  },
  {
    name: "Packaging Machinery",
    desc: "Tools to streamline packing workflows with consistent output quality.",
    tag: "Packaging",
  },
  {
    name: "Processing Equipment",
    desc: "Machinery to support industrial processing and production efficiency.",
    tag: "Processing",
  },
  {
    name: "Workshop Tools & Accessories",
    desc: "Essential equipment that strengthens daily industrial operations.",
    tag: "Workshop",
  },
  {
    name: "Custom Requirements",
    desc: "Tell us your specification—we’ll coordinate the right option for your use case.",
    tag: "Inquiry",
  },
];

export default function Products() {
  return (
    <Container>
      <section className="card section">
        <SectionHeader
          title="Products"
          subtitle="A professional overview of our machinery areas. For exact models and pricing, please send an inquiry."
        />

        <div className="grid3">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="card"
              style={{ padding: 16, boxShadow: "none" }}
            >
              <div className="pill" style={{ marginBottom: 10 }}>
                {p.tag}
              </div>
              <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 6 }}>
                {p.name}
              </div>
              <div className="footerSmall">{p.desc}</div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn btnPrimary" to="/contact">
                  Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>

        <hr className="hr" />

        <div className="notice">
          Prefer a quick call? Reach us at <b>0117511040</b> / <b>0117904112</b>
          .
        </div>
      </section>
    </Container>
  );
}
