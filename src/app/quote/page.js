"use client";
import { useState } from "react";
import "./quote.css";

const SERVICES = [
  { id: "design", icon: "🏛️", title: "Architectural Design", desc: "Plans, 3D visualization, BOQ" },
  { id: "construction", icon: "🏗️", title: "Custom Construction", desc: "Ground-up residential build" },
  { id: "renovation", icon: "🔧", title: "Renovation", desc: "Remodeling & structural upgrades" },
  { id: "digital", icon: "💻", title: "Smart Home & Digital", desc: "Automation, CCTV, networking" },
];

const BUDGETS = [
  { id: "under5", label: "Under Rs. 5M", desc: "Small projects" },
  { id: "5to10", label: "Rs. 5M – 10M", desc: "Medium residential" },
  { id: "10to25", label: "Rs. 10M – 25M", desc: "Large residential" },
  { id: "25plus", label: "Rs. 25M+", desc: "Premium / commercial" },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const stepLabels = ["Service", "Details", "Budget", "Submit"];

  const goNext = () => {
    if (step === 1 && !selectedService) return;
    if (step < 4) setStep(step + 1);
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <header className="quote-header">
        <div className="container">
          <div className="section-label">Free Consultation</div>
          <h1>Get a <span className="text-gradient">Quote</span></h1>
          <p>
            Tell us about your project in 4 simple steps. Our team will review
            your requirements and get back to you with a detailed consultation —
            completely free of charge.
          </p>
        </div>
      </header>

      <section className="quote-section">
        <div className="container">
          <div className="quote-form-wrapper">
            
            {/* Step Indicator */}
            <div className="quote-steps">
              {stepLabels.map((label, i) => (
                <div
                  key={i}
                  className={`quote-step ${step === i + 1 ? "active" : ""} ${step > i + 1 ? "completed" : ""}`}
                >
                  <div className="quote-step-number">
                    {step > i + 1 ? "✓" : i + 1}
                  </div>
                  <div className="quote-step-label">{label}</div>
                </div>
              ))}
            </div>

            <form action="https://formsubmit.co/info@housefix.lk" method="POST">
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="🏠 New Quote Request from HOUSEFIX.LK!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://www.housefix.lk/contact/" />

              {/* Step 1: Service Selection */}
              <div className={`quote-form-step ${step === 1 ? "active" : ""}`}>
                <h2>What do you <span className="text-gradient">need?</span></h2>
                <p>Select the service that best matches your project.</p>

                <div className="service-selector">
                  {SERVICES.map((svc) => (
                    <div
                      key={svc.id}
                      className={`service-option ${selectedService === svc.id ? "selected" : ""}`}
                      onClick={() => setSelectedService(svc.id)}
                    >
                      <div className="service-option-icon">{svc.icon}</div>
                      <h4>{svc.title}</h4>
                      <p>{svc.desc}</p>
                    </div>
                  ))}
                </div>
                <input type="hidden" name="Service" value={selectedService} />

                <div className="quote-nav">
                  <div />
                  <button type="button" className="btn btn-primary" onClick={goNext} disabled={!selectedService}>
                    Next Step
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
              </div>

              {/* Step 2: Project Details */}
              <div className={`quote-form-step ${step === 2 ? "active" : ""}`}>
                <h2>Project <span className="text-gradient">Details</span></h2>
                <p>Tell us about the location and scope of your project.</p>

                <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div className="form-group">
                    <label htmlFor="q-name" className="form-label">Full Name</label>
                    <input type="text" id="q-name" name="Name" className="form-input" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="q-phone" className="form-label">Phone / WhatsApp</label>
                    <input type="tel" id="q-phone" name="Phone" className="form-input" placeholder="+94 77 000 0000" required />
                  </div>
                  <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="q-email" className="form-label">Email Address</label>
                    <input type="email" id="q-email" name="Email" className="form-input" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="q-location" className="form-label">Project Location</label>
                    <input type="text" id="q-location" name="Location" className="form-input" placeholder="e.g. Jaffna, Suthumalai" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="q-land" className="form-label">Land / Floor Area (sqft)</label>
                    <input type="text" id="q-land" name="Area" className="form-input" placeholder="e.g. 2000 sqft" />
                  </div>
                </div>

                <div className="quote-nav">
                  <button type="button" className="btn btn-secondary" onClick={goBack}>
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                    Back
                  </button>
                  <button type="button" className="btn btn-primary" onClick={goNext}>
                    Next Step
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
              </div>

              {/* Step 3: Budget */}
              <div className={`quote-form-step ${step === 3 ? "active" : ""}`}>
                <h2>Estimated <span className="text-gradient">Budget</span></h2>
                <p>Select the range that best fits your investment plan. This helps us tailor an accurate proposal.</p>

                <div className="budget-options">
                  {BUDGETS.map((b) => (
                    <div
                      key={b.id}
                      className={`budget-option ${selectedBudget === b.id ? "selected" : ""}`}
                      onClick={() => setSelectedBudget(b.id)}
                    >
                      <h4>{b.label}</h4>
                      <p>{b.desc}</p>
                    </div>
                  ))}
                </div>
                <input type="hidden" name="Budget" value={selectedBudget ? BUDGETS.find(b => b.id === selectedBudget)?.label : ""} />

                <div className="quote-nav">
                  <button type="button" className="btn btn-secondary" onClick={goBack}>
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                    Back
                  </button>
                  <button type="button" className="btn btn-primary" onClick={goNext}>
                    Final Step
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
              </div>

              {/* Step 4: Message & Submit */}
              <div className={`quote-form-step ${step === 4 ? "active" : ""}`}>
                <h2>Almost <span className="text-gradient">There!</span></h2>
                <p>Any additional details? Then hit submit and our team will contact you within 24 hours.</p>

                <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                  <label htmlFor="q-timeline" className="form-label">Preferred Timeline</label>
                  <select id="q-timeline" name="Timeline" className="form-select" style={{ width: "100%", background: "rgba(8, 15, 26, 0.6)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", color: "var(--hf-white)", appearance: "none" }}>
                    <option value="ASAP">As soon as possible</option>
                    <option value="1-3 months">Within 1–3 months</option>
                    <option value="3-6 months">Within 3–6 months</option>
                    <option value="6+ months">6+ months (planning phase)</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                  <label htmlFor="q-message" className="form-label">Additional Notes (Optional)</label>
                  <textarea id="q-message" name="Message" className="form-textarea" placeholder="Any specific requirements, reference designs, or questions..." style={{ width: "100%", background: "rgba(8, 15, 26, 0.6)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", color: "var(--hf-white)", minHeight: "120px", resize: "vertical" }}></textarea>
                </div>

                <div className="quote-nav">
                  <button type="button" className="btn btn-secondary" onClick={goBack}>
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit Quote Request
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </div>
              </div>
            </form>

            {/* WhatsApp Alternative */}
            <div className="quote-or-divider">
              <p>Prefer to chat directly?</p>
              <a
                href="https://wa.me/94765604711?text=Hello%20HOUSEFIX.LK!%20I%20filled%20out%20the%20quote%20form%20and%20would%20like%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us Instead
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
