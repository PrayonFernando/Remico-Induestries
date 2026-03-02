import React, { useMemo, useRef, useState } from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import emailjs from "@emailjs/browser";

function requiredEnv(name) {
  const v = import.meta.env[name];
  return typeof v === "string" ? v : "";
}

export default function Contact() {
  const formRef = useRef(null);

  const EMAILJS_SERVICE_ID = requiredEnv("VITE_EMAILJS_SERVICE_ID");
  const EMAILJS_TEMPLATE_ID = requiredEnv("VITE_EMAILJS_TEMPLATE_ID");
  const EMAILJS_PUBLIC_KEY = requiredEnv("VITE_EMAILJS_PUBLIC_KEY");

  const envOk = useMemo(() => {
    return Boolean(
      EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY,
    );
  }, [EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY]);

  const [status, setStatus] = useState({ type: "idle", msg: "" });
  const [loading, setLoading] = useState(false);

  const adminEmail = "info@remicoindustries.com";

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "idle", msg: "" });

    if (!envOk) {
      setStatus({
        type: "err",
        msg: "Email service is not configured yet. Add your EmailJS keys in .env.local (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY).",
      });
      return;
    }

    setLoading(true);
    try {
      // The template should include a "to_email" variable = info@remicoindustries.com
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      formRef.current?.reset();
      setStatus({
        type: "ok",
        msg: "Your inquiry has been sent successfully. We will contact you shortly.",
      });
    } catch (err) {
      setStatus({
        type: "err",
        msg: "Failed to send the inquiry. Please try again, or call us directly at 0117511040 / 0117904112.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <section className="card section">
        <SectionHeader
          title="Contact"
          subtitle="Send an inquiry and we’ll get back to you. For urgent matters, please call."
        />

        <div className="grid2">
          <div className="card" style={{ padding: 18, boxShadow: "none" }}>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Office</div>
            <div className="footerSmall">
              <div>
                <b>Address:</b> 45, Edirisingha Road, Mirihana, Colombo 05
              </div>
              <div style={{ marginTop: 8 }}>
                <b>Contact 1:</b> 0117511040
              </div>
              <div>
                <b>Contact 2:</b> 0117904112
              </div>
              <div style={{ marginTop: 8 }}>
                <b>Email:</b> {adminEmail}
              </div>
            </div>

            <hr className="hr" />

            <div className="notice">
              Tip: When you submit the form, the message is sent to{" "}
              <b>{adminEmail}</b>. Replace the EmailJS template later if you
              want auto-replies too.
            </div>

            <div style={{ height: 12 }} />

            {/* Optional map (no extra images). You can remove if you want it ultra-minimal. */}
            <div
              className="card"
              style={{
                overflow: "hidden",
                borderRadius: 14,
                border: "1px solid var(--border)",
              }}
            >
              <iframe
                title="Remico Industries Location"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Mirihana,%20Colombo%2005&output=embed"
              />
            </div>
          </div>

          <div className="card" style={{ padding: 18, boxShadow: "none" }}>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>
              Send us a message
            </div>

            {status.type === "ok" ? (
              <div className="notice ok" style={{ marginBottom: 12 }}>
                {status.msg}
              </div>
            ) : null}
            {status.type === "err" ? (
              <div className="notice err" style={{ marginBottom: 12 }}>
                {status.msg}
              </div>
            ) : null}

            <form ref={formRef} onSubmit={onSubmit}>
              {/* EmailJS template variables */}
              <input type="hidden" name="to_email" value={adminEmail} />

              <label className="label" htmlFor="from_name">
                Full Name
              </label>
              <input
                className="input"
                id="from_name"
                name="from_name"
                placeholder="Your name"
                required
              />

              <div style={{ height: 12 }} />

              <label className="label" htmlFor="reply_to">
                Email
              </label>
              <input
                className="input"
                id="reply_to"
                name="reply_to"
                type="email"
                placeholder="your@email.com"
                required
              />

              <div style={{ height: 12 }} />

              <label className="label" htmlFor="phone">
                Phone (optional)
              </label>
              <input
                className="input"
                id="phone"
                name="phone"
                placeholder="07X XXX XXXX"
              />

              <div style={{ height: 12 }} />

              <label className="label" htmlFor="subject">
                Subject
              </label>
              <input
                className="input"
                id="subject"
                name="subject"
                placeholder="Quotation request / Product inquiry"
                required
              />

              <div style={{ height: 12 }} />

              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea
                className="textarea"
                id="message"
                name="message"
                placeholder="Tell us what you need..."
                required
              />

              <div style={{ height: 14 }} />

              <button
                className="btn btnPrimary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

              {!envOk ? (
                <div className="footerSmall" style={{ marginTop: 10 }}>
                  Email not configured yet — complete the EmailJS setup below.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}
