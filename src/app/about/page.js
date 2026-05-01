import Link from "next/link";
import "./about.css";

export const metadata = {
  title: "About Us | HOUSEFIX.LK",
  description: "Learn about HOUSEFIX.LK, our engineering-led team, and our commitment to building the future of smart living in Sri Lanka.",
};

export default function AboutPage() {
  return (
    <>
      <header className="about-header">
        <div className="container reveal">
          <div className="section-label">Who We Are</div>
          <h1>Built on <span className="text-gradient">Integrity</span></h1>
          <p>
            HOUSEFIX.LK is an engineering-led construction and design company.
            We blend traditional craftsmanship with modern technology to deliver
            premium homes across Sri Lanka.
          </p>
        </div>
      </header>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content reveal-left">
              <h2>Our <span className="text-gradient">Story</span></h2>
              <p>
                Based in Jaffna, HOUSEFIX.LK (PVT) LTD was founded with a clear mission: 
                to elevate the standard of construction in Sri Lanka. We noticed a gap 
                between what clients expected and what traditional builders delivered — 
                so we bridged it with engineering precision and transparent processes.
              </p>
              <p>
                We don't just build walls; we engineer living spaces. Through our 
                integrated Primeware division, we are also pioneers in bringing 
                smart home technology and digital infrastructure into modern 
                residential construction.
              </p>
              <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(42, 111, 212, 0.05)", borderLeft: "4px solid var(--hf-blue)", borderRadius: "0 8px 8px 0" }}>
                <p style={{ margin: 0, fontStyle: "italic", color: "var(--hf-silver-light)" }}>
                  "Our goal is to give every client peace of mind, knowing their home is built to the highest engineering standards, on time, and without hidden costs."
                </p>
              </div>
            </div>
            <div className="story-image reveal-right">
              <div style={{ background: "linear-gradient(135deg, var(--hf-navy), var(--hf-navy-dark))", width: "100%", height: "100%", display: "flex", alignItems: "center", justify: "center", minHeight: "400px" }}>
                <img src="/logo.png" alt="HOUSEFIX.LK Brand" style={{ width: "150px", height: "auto", opacity: 0.5 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section">
        <div className="container text-center">
          <span className="section-label reveal">Leadership</span>
          <h2 className="section-title reveal">Our <span className="text-gradient">Team</span></h2>
          <p className="section-subtitle reveal">
            Guided by experienced professionals who understand both the science 
            of engineering and the art of design.
          </p>

          <div className="team-grid">
            <div className="team-card reveal">
              <div className="team-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Eng. T. Sathurgasthan</h3>
              <div className="team-role">Managing Director</div>
              <p>
                Leading the strategic direction of HOUSEFIX.LK. With a strong engineering 
                background, he ensures every project meets rigorous structural and 
                quality standards.
              </p>
            </div>

            {/* Placeholder for future team members */}
            <div className="team-card reveal" style={{ opacity: 0.6 }}>
              <div className="team-avatar" style={{ borderStyle: "dashed" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Join Our Team</h3>
              <div className="team-role">Various Positions</div>
              <p>
                We are always looking for talented architects, civil engineers, and 
                project managers to join our growing team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Regions */}
      <section className="regions-section">
        <div className="container text-center">
          <h2 className="section-title reveal">Where We <span className="text-gradient">Build</span></h2>
          <p className="section-subtitle reveal">
            Headquartered in Jaffna, we actively manage and execute construction 
            projects across key regions in the Northern Province.
          </p>

          <div className="regions-grid reveal">
            <div className="region-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Jaffna</span>
            </div>
            <div className="region-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Manipay</span>
            </div>
            <div className="region-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Suthumalai</span>
            </div>
            <div className="region-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Puththur</span>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
