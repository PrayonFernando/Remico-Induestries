import React from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <Container>
      <section className="card section">
        <SectionHeader
          title="About Remico Industries"
          subtitle="A formal, client-focused approach to industrial machinery supply and coordination."
        />

        <div className="grid2" style={{ alignItems: "stretch" }}>
          <div className="card" style={{ padding: 18, boxShadow: "none" }}>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>What we do</div>
            <p className="sectionSub">
              We support business clients by sourcing and supplying industrial
              machinery with clear communication and dependable coordination.
              Our focus is to keep the process professional, transparent, and
              efficient.
            </p>

            <div style={{ height: 12 }} />

            <div style={{ fontWeight: 900, marginBottom: 10 }}>How we work</div>
            <ul className="sectionSub" style={{ margin: 0, paddingLeft: 18 }}>
              <li>Understand your requirement and operating environment</li>
              <li>Provide a practical quotation and timeline</li>
              <li>
                Coordinate supply and support with a service-first mindset
              </li>
            </ul>
          </div>

          <div className="heroImage">
            {/* Minimal second image for About (optional but appropriate) */}
            <img
              alt="Industrial equipment"
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=70"
            />
          </div>
        </div>

        <hr className="hr" />

        <div className="grid3">
          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Professional</div>
            <div className="footerSmall">
              Formal communication and structured handling from inquiry to
              delivery.
            </div>
          </div>
          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Reliable</div>
            <div className="footerSmall">
              Focused on dependable machinery options aligned with business
              needs.
            </div>
          </div>
          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Transparent</div>
            <div className="footerSmall">
              Clear steps, realistic timelines, and straightforward quotations.
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
