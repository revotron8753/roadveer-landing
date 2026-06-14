"use client";

import { useState } from "react";

const ROLES = [
  "RTR Volunteer (Roadveer Tiger Rakshak)",
  "Driver — Register on Platform",
  "Vendor — Mechanic / Tyre / Dhaba / Other",
  "Ambulance / Hospital Partner",
  "CSR / Corporate Partner",
  "Investor",
  "Government / NGO Partner",
  "Other",
];

const EMPTY = {
  name: "",
  mobile: "",
  state: "",
  district: "",
  role: "",
  message: "",
};

export default function RegisterForm() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your API / Google Sheet / WhatsApp flow.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form" role="status">
        <div className="form-title">Dhanyavaad.</div>
        <p className="form-sub">
          Thank you{form.name ? `, ${form.name}` : ""}. Your registration has
          been received — the Roadveer team will reach out within 24 hours.
        </p>
        <button
          type="button"
          className="form-submit"
          onClick={() => {
            setForm(EMPTY);
            setSubmitted(false);
          }}
        >
          Register another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-title">Register with Roadveer</div>
      <p className="form-sub">
        Fill in your details and we will get back within 24 hours.
      </p>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="rv-name">Full Name *</label>
          <input
            id="rv-name"
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={update("name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rv-mobile">Mobile Number *</label>
          <input
            id="rv-mobile"
            type="tel"
            placeholder="+91"
            required
            value={form.mobile}
            onChange={update("mobile")}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="rv-state">State</label>
          <input
            id="rv-state"
            type="text"
            placeholder="Maharashtra"
            value={form.state}
            onChange={update("state")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rv-district">District / Taluka</label>
          <input
            id="rv-district"
            type="text"
            placeholder="Your district"
            value={form.district}
            onChange={update("district")}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="rv-role">I want to join as *</label>
        <select
          id="rv-role"
          required
          value={form.role}
          onChange={update("role")}
        >
          <option value="">Select your role</option>
          {ROLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="rv-message">Message (Optional)</label>
        <textarea
          id="rv-message"
          placeholder="Tell us about yourself or your organisation..."
          value={form.message}
          onChange={update("message")}
        />
      </div>
      <button type="submit" className="form-submit">
        Submit Registration
      </button>
    </form>
  );
}
