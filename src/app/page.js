import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import "./home.css";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-bg-image" />
          <div className="hero-bg-overlay" />
          <div className="glow-blob blob-blue hero-blob-1" />
          <div className="glow-blob blob-sky hero-blob-2" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Design • Build • Renovate
            </div>

            <h1>
              Crafting Homes with{" "}
              <span className="text-gradient">Engineering Precision</span>
            </h1>

            <p className="hero-subtitle">
              HOUSEFIX.LK transforms your vision into reality — from
              architectural design and custom construction to complete
              renovations. Based in Jaffna, building across Sri Lanka.
            </p>

            <div className="hero-actions">
              <Link href="/quote" className="btn btn-primary">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Request a Quote
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                View Our Work
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-value"><AnimatedCounter end={50} suffix="+" /></div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div>
                <div className="hero-stat-value"><AnimatedCounter end={7} suffix="+" /></div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div>
                <div className="hero-stat-value"><AnimatedCounter end={100} suffix="%" /></div>
                <div className="hero-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-card">
                <img src="/projects/hero-project.jpg" alt="Modern home construction by HOUSEFIX.LK in Suthumalai, Jaffna" />
                <div className="hero-image-overlay">
                  <div>
                    <div className="hero-image-label">Mrs. Aarany House</div>
                    <div className="hero-image-sublabel">Suthumalai, Jaffna</div>
                  </div>
                </div>
              </div>
              <div className="hero-floating-badge">
                <div className="hero-floating-badge-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <div className="hero-floating-badge-text">Registered Company</div>
                  <div className="hero-floating-badge-sub">HOUSEFIX.LK (PVT) LTD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST BAR ═══════════════════ */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar-grid">
            <div className="trust-item reveal">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="trust-text">
                <h4>Registered & Certified</h4>
                <p>Fully registered PVT LTD company</p>
              </div>
            </div>
            <div className="trust-item reveal">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="trust-text">
                <h4>Jaffna-Based</h4>
                <p>Local expertise, island-wide service</p>
              </div>
            </div>
            <div className="trust-item reveal">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div className="trust-text">
                <h4>On-Time Delivery</h4>
                <p>Committed project timelines</p>
              </div>
            </div>
            <div className="trust-item reveal">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div className="trust-text">
                <h4>Engineering-Led</h4>
                <p>Professional engineering team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section className="services-section" id="services">
        <div className="container text-center">
          <span className="section-label reveal">What We Offer</span>
          <h2 className="section-title reveal">
            Three Pillars of <span className="text-gradient">Excellence</span>
          </h2>
          <p className="section-subtitle reveal">
            From initial design concepts to complete construction and expert
            renovations — we deliver end-to-end home solutions.
          </p>

          <div className="services-grid">
            {/* Design */}
            <div className="service-card reveal">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
              </div>
              <h3>Design</h3>
              <p>
                Custom architectural plans tailored to your lifestyle, land, and
                budget. We create spaces that are both beautiful and functional.
              </p>
              <div className="service-features">
                <div className="service-feature"><CheckIcon /> Architectural Planning</div>
                <div className="service-feature"><CheckIcon /> Interior Design</div>
                <div className="service-feature"><CheckIcon /> 3D Visualization</div>
                <div className="service-feature"><CheckIcon /> Council Approvals</div>
              </div>
            </div>

            {/* Construction */}
            <div className="service-card reveal">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14L2.3 6.3"/><path d="M14 6l7.7 7.7"/></svg>
              </div>
              <h3>Construction</h3>
              <p>
                Full-scale home construction from foundation to handover, using
                quality materials and professional engineering standards.
              </p>
              <div className="service-features">
                <div className="service-feature"><CheckIcon /> Custom Home Building</div>
                <div className="service-feature"><CheckIcon /> Structural Engineering</div>
                <div className="service-feature"><CheckIcon /> MEP Installation</div>
                <div className="service-feature"><CheckIcon /> Quality Assurance</div>
              </div>
            </div>

            {/* Renovation */}
            <div className="service-card reveal">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3>Renovation</h3>
              <p>
                Transform your existing space with modern upgrades, structural
                improvements, and contemporary finishes that breathe new life.
              </p>
              <div className="service-features">
                <div className="service-feature"><CheckIcon /> Structural Upgrades</div>
                <div className="service-feature"><CheckIcon /> Kitchen & Bath Remodels</div>
                <div className="service-feature"><CheckIcon /> Modern Finishes</div>
                <div className="service-feature"><CheckIcon /> Smart Home Integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PROJECT ═══════════════════ */}
      <section className="featured-section" id="featured">
        <div className="container">
          <span className="section-label reveal">Featured Project</span>
          <h2 className="section-title reveal">
            Mrs. Aarany House — <span className="text-gradient">Suthumalai</span>
          </h2>
          <p className="section-subtitle reveal">
            A complete 7-phase journey from bare ground to a stunning modern
            residence, showcasing our end-to-end construction expertise.
          </p>

          <div className="featured-content">
            <div className="phase-timeline reveal-left">
              {[
                { phase: "01", title: "Site Planning & Earthworks", desc: "Professional site survey and earthwork leveling" },
                { phase: "02", title: "Foundations & Concrete Slab", desc: "High-tensile rebar and precision concrete pour" },
                { phase: "03", title: "Lower Structural Frame", desc: "Columns and beams meeting rigorous safety standards" },
                { phase: "04", title: "Upper Structure & Lintels", desc: "Elevated framing with expert lintel placement" },
                { phase: "05", title: "Masonry & Roof Slab", desc: "Weather-ready walls and thermally balanced roofing" },
                { phase: "06", title: "MEP & Finishes", desc: "Electrical, plumbing, and smooth plastered finishes" },
                { phase: "07", title: "Handover", desc: "Final inspection, cleanup, and key handover" },
              ].map((item, i) => (
                <div className="phase-item" key={i}>
                  <div className="phase-marker">
                    <div className="phase-dot" />
                    <div className="phase-line" />
                  </div>
                  <div className="phase-info">
                    <h4>Phase {item.phase}: {item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="featured-gallery reveal-right">
              <div className="featured-img">
                <img src="/projects/aarany-1.jpg" alt="Construction phase - Structural framework of Mrs. Aarany House" />
              </div>
              <div className="featured-img">
                <img src="/projects/aarany-2.jpg" alt="Construction progress - Masonry work at Suthumalai" />
              </div>
              <div className="featured-img">
                <img src="/projects/aarany-3.jpg" alt="Finishing phase - Interior work completed" />
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
            <Link href="/projects" className="btn btn-secondary">
              View All Projects
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW WE WORK ═══════════════════ */}
      <section className="process-section" id="process">
        <div className="container text-center">
          <span className="section-label reveal">Our Process</span>
          <h2 className="section-title reveal">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle reveal">
            A transparent, step-by-step approach that keeps you informed and in
            control at every stage of your project.
          </p>

          <div className="process-grid">
            {[
              { num: "01", title: "Consult", desc: "Share your vision with us. We assess your needs, site conditions, and budget to create a clear project roadmap." },
              { num: "02", title: "Design", desc: "Our team creates custom architectural plans, 3D visualizations, and engineering drawings for your approval." },
              { num: "03", title: "Build", desc: "Construction begins with quality materials, skilled teams, and regular progress updates throughout every phase." },
              { num: "04", title: "Deliver", desc: "Final inspection, finishing touches, and a complete handover of your dream home — ready to move in." },
            ].map((step, i) => (
              <div className="process-card reveal" key={i}>
                <div className="process-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
      <section className="why-section" id="why-us">
        <div className="container text-center">
          <span className="section-label reveal">Why HOUSEFIX.LK</span>
          <h2 className="section-title reveal">
            Built on <span className="text-gradient">Trust & Quality</span>
          </h2>
          <p className="section-subtitle reveal">
            Engineering-led construction with a commitment to transparency,
            quality materials, and on-time delivery.
          </p>

          <div className="why-grid">
            {[
              { icon: "shield", title: "Registered Company", desc: "Fully registered PVT LTD with all legal compliance and professional insurance." },
              { icon: "users", title: "Engineering-Led Team", desc: "Led by qualified engineers with deep expertise in structural and civil construction." },
              { icon: "clock", title: "On-Time Delivery", desc: "Fixed timelines with regular progress reports and milestone tracking." },
              { icon: "quality", title: "Quality Materials", desc: "We source premium building materials from trusted suppliers across Sri Lanka." },
              { icon: "map", title: "Regional Expertise", desc: "Deep knowledge of Jaffna's terrain, climate, and building requirements." },
              { icon: "phone", title: "24/7 Communication", desc: "Direct WhatsApp access and real-time photo updates from your construction site." },
            ].map((item, i) => (
              <div className="why-card reveal" key={i}>
                <div className="why-card-icon">
                  {item.icon === "shield" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                  {item.icon === "users" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>}
                  {item.icon === "clock" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
                  {item.icon === "quality" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
                  {item.icon === "map" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                  {item.icon === "phone" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"/></svg>}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRIMEWARE DIVISION ═══════════════════ */}
      <section className="primeware-section reveal">
        <div className="container">
          <div className="primeware-card">
            <div className="primeware-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div className="primeware-info">
              <h3><span className="text-gold-gradient">PRIMEWARE</span> — Digital Division</h3>
              <p>
                Our technology arm delivering digital infrastructure, software development,
                and IT solutions. From smart home automation to business systems —
                Primeware bridges construction and technology for the modern age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card reveal">
            <h2>Ready to Transform <span className="text-gradient">Your Space?</span></h2>
            <p>
              Whether it&#39;s a new home, a renovation, or a design consultation —
              we&#39;re ready to bring your vision to life.
            </p>
            <div className="cta-actions">
              <Link href="/quote" className="btn btn-primary">
                Request a Free Consultation
              </Link>
              <a
                href="https://wa.me/94765604711?text=Hello%20HOUSEFIX.LK!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
