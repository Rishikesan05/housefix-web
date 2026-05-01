import Link from "next/link";
import "./services.css";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export const metadata = {
  title: "Our Services | HOUSEFIX.LK",
  description: "Comprehensive home solutions including architectural design, custom construction, and modern renovations in Jaffna, Sri Lanka.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="services-header">
        <div className="container reveal">
          <div className="section-label">What We Do</div>
          <h1>Our <span className="text-gradient">Services</span></h1>
          <p>
            From the first sketch to the final coat of paint, we provide end-to-end
            solutions for your home. Built with engineering precision and designed
            for modern living.
          </p>
        </div>
      </header>

      {/* Design Service */}
      <section className="service-detail-section" id="design">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-content reveal-left">
              <h2>Architectural <span className="text-gradient">Design</span></h2>
              <p>
                Every great home starts with a perfect plan. Our design team works
                closely with you to understand your lifestyle, preferences, and the
                unique characteristics of your land. We don't just use ready-made
                templates; we craft bespoke designs that reflect your personality.
              </p>
              <div className="service-list">
                <div className="service-list-item"><CheckIcon /> Custom Floor Plans</div>
                <div className="service-list-item"><CheckIcon /> 3D Visualizations</div>
                <div className="service-list-item"><CheckIcon /> Interior Design</div>
                <div className="service-list-item"><CheckIcon /> Structural Engineering</div>
                <div className="service-list-item"><CheckIcon /> BOQ Estimation</div>
                <div className="service-list-item"><CheckIcon /> Council Approvals</div>
              </div>
            </div>
            <div className="service-image reveal-right">
              <img src="/projects/aarany-1.jpg" alt="Architectural planning and structural design" />
            </div>
          </div>
        </div>
      </section>

      {/* Construction Service */}
      <section className="service-detail-section" id="construction">
        <div className="container">
          <div className="service-detail-grid reverse">
            <div className="service-content reveal-right">
              <h2>Custom <span className="text-gradient">Construction</span></h2>
              <p>
                Building a house is a major investment, and we treat it with the
                respect it deserves. Our engineering-led construction teams use
                premium materials, follow strict quality control processes, and
                ensure complete transparency throughout the build.
              </p>
              <div className="service-list">
                <div className="service-list-item"><CheckIcon /> Turnkey Construction</div>
                <div className="service-list-item"><CheckIcon /> Premium Materials</div>
                <div className="service-list-item"><CheckIcon /> Skilled Labor Force</div>
                <div className="service-list-item"><CheckIcon /> MEP Installation</div>
                <div className="service-list-item"><CheckIcon /> Quality Assurance</div>
                <div className="service-list-item"><CheckIcon /> Timely Delivery</div>
              </div>
            </div>
            <div className="service-image reveal-left">
              <img src="/projects/aarany-2.jpg" alt="Custom home construction in progress" />
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Service */}
      <section className="service-detail-section" id="renovation">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-content reveal-left">
              <h2>Modern <span className="text-gradient">Renovation</span></h2>
              <p>
                Breathe new life into your existing space. Whether it's a complete
                gut renovation, a modern kitchen upgrade, or structural improvements,
                our team minimizes disruption while maximizing value and aesthetics.
              </p>
              <div className="service-list">
                <div className="service-list-item"><CheckIcon /> Full Home Remodels</div>
                <div className="service-list-item"><CheckIcon /> Kitchen & Bath</div>
                <div className="service-list-item"><CheckIcon /> Structural Repairs</div>
                <div className="service-list-item"><CheckIcon /> Modern Finishes</div>
                <div className="service-list-item"><CheckIcon /> Flooring & Tiling</div>
                <div className="service-list-item"><CheckIcon /> Roof Replacements</div>
              </div>
            </div>
            <div className="service-image reveal-right">
              <img src="/projects/aarany-3.jpg" alt="Modern home renovation finishes" />
            </div>
          </div>
        </div>
      </section>

      {/* Primeware Service */}
      <section className="service-detail-section" id="digital">
        <div className="container">
          <div className="service-detail-grid reverse">
            <div className="service-content reveal-right">
              <h2><span className="text-gold-gradient">Digital</span> Transformation</h2>
              <p>
                Powered by our Primeware division, we integrate cutting-edge technology
                into your home and business. From smart home automation that controls
                lighting and security, to robust IT infrastructure for commercial spaces.
              </p>
              <div className="service-list">
                <div className="service-list-item"><CheckIcon /> Smart Home Systems</div>
                <div className="service-list-item"><CheckIcon /> Security & CCTV</div>
                <div className="service-list-item"><CheckIcon /> Networking Setup</div>
                <div className="service-list-item"><CheckIcon /> IT Infrastructure</div>
                <div className="service-list-item"><CheckIcon /> Automated Lighting</div>
                <div className="service-list-item"><CheckIcon /> Access Control</div>
              </div>
            </div>
            <div className="service-image reveal-left" style={{ background: "var(--hf-navy-dark)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", padding: "3rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--hf-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "80px", height: "80px", marginBottom: "1.5rem" }}>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <h3 style={{ color: "var(--hf-gold)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>PRIMEWARE</h3>
                <p style={{ color: "var(--hf-silver-dark)" }}>Digital Infrastructure Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container reveal">
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Ready to start your project?</h2>
          <p style={{ color: "var(--hf-silver)", marginBottom: "2rem" }}>Contact us today for a free consultation and customized quote.</p>
          <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
