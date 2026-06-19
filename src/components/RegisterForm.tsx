"use client";

import { useState } from "react";
import { useContent } from "@/lib/i18n";

const EMPTY = {
  name: "",
  mobile: "",
  state: "",
  district: "",
  role: "",
  message: "",
};

export default function RegisterForm() {
  const t = useContent().form;
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
        <div className="form-title">{t.successTitle}</div>
        <p className="form-sub">
          {t.successPre}
          {form.name ? `, ${form.name}` : ""}
          {t.successPost}
        </p>
        <button
          type="button"
          className="form-submit"
          onClick={() => {
            setForm(EMPTY);
            setSubmitted(false);
          }}
        >
          {t.registerAnother}
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-title">{t.title}</div>
      <p className="form-sub">{t.sub}</p>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="rv-name">{t.fullName}</label>
          <input
            id="rv-name"
            type="text"
            placeholder={t.namePlaceholder}
            required
            value={form.name}
            onChange={update("name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rv-mobile">{t.mobile}</label>
          <input
            id="rv-mobile"
            type="tel"
            placeholder={t.mobilePlaceholder}
            required
            value={form.mobile}
            onChange={update("mobile")}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="rv-state">{t.state}</label>
          <input
            id="rv-state"
            type="text"
            placeholder={t.statePlaceholder}
            value={form.state}
            onChange={update("state")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rv-district">{t.district}</label>
          <input
            id="rv-district"
            type="text"
            placeholder={t.districtPlaceholder}
            value={form.district}
            onChange={update("district")}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="rv-role">{t.joinAs}</label>
        <select
          id="rv-role"
          required
          value={form.role}
          onChange={update("role")}
        >
          <option value="">{t.selectRole}</option>
          {t.roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="rv-message">{t.message}</label>
        <textarea
          id="rv-message"
          placeholder={t.messagePlaceholder}
          value={form.message}
          onChange={update("message")}
        />
      </div>
      <button type="submit" className="form-submit">
        {t.submit}
      </button>
    </form>
  );
}
