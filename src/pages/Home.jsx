import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
  const highlights = [
    {
      title: "Industrial Machinery Supply",
      desc: "Carefully selected machinery categories suitable for industrial operations and facility upgrades.",
    },
    {
      title: "Business-First Support",
      desc: "Clear communication, quick quotations, and dependable after-sales coordination.",
    },
    {
      title: "Trusted Local Presence",
      desc: "Colombo-based operations with straightforward access for clients and partners.",
    },
  ];

  const categories = [
    {
      name: "Processing & Production",
      desc: "Equipment for industrial workflows and output efficiency.",
    },
    {
      name: "Packaging & Handling",
      desc: "Solutions for packing, moving, and organizing materials.",
    },
    {
      name: "Power & Utilities",
      desc: "Machinery supporting power, air, and utility operations.",
    },
  ];

  return (
    <Container>
      <div className="grid2" style={{ alignItems: "stretch" }}>
        <section className="card section">
          <div className="pill">Industrial Machinery • Sri Lanka</div>
          <h1 className="h1">Reliable machinery for industrial operations.</h1>
          <p className="lead">
            Remico Industries provides practical industrial machinery solutions
            for business clients—focused on reliability, clarity, and
            professional service.
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 16,
              flexWrap: "wrap",
            }}
          >
            <Link className="btn btnPrimary" to="/contact">
              Request a Quote
            </Link>
            <Link className="btn btnSecondary" to="/products">
              View Products
            </Link>
          </div>

          <hr className="hr" />

          <div className="grid3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="card"
                style={{ padding: 14, boxShadow: "none" }}
              >
                <div style={{ fontWeight: 800, marginBottom: 6 }}>
                  {h.title}
                </div>
                <div className="footerSmall">{h.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <aside className="heroImage">
          {/* Minimal, single hero image (replace anytime) */}
          <img
            alt="Industrial machinery"
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=70"
          />
        </aside>
      </div>

      <div style={{ height: 18 }} />

      <section className="card section">
        <SectionHeader
          title="Product areas"
          subtitle="A clean, professional selection of machinery categories. Contact us for availability and quotations."
        />
        <div className="grid3">
          {categories.map((c) => (
            <div
              key={c.name}
              className="card"
              style={{ padding: 16, boxShadow: "none" }}
            >
              <div style={{ fontWeight: 900, marginBottom: 6 }}>{c.name}</div>
              <div className="footerSmall">{c.desc}</div>
              <div style={{ marginTop: 12 }}>
                <Link className="btn btnSecondary" to="/products">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
