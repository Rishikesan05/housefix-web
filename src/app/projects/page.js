import Link from "next/link";
import "./projects.css";

export const metadata = {
  title: "Our Projects | HOUSEFIX.LK",
  description: "Explore our portfolio of completed construction and renovation projects across Jaffna and Sri Lanka.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="projects-header">
        <div className="container reveal">
          <div className="section-label">Our Portfolio</div>
          <h1>Featured <span className="text-gradient">Projects</span></h1>
          <p>
            Take a look at some of our completed work. Each project represents
            our commitment to quality, engineering precision, and client satisfaction.
          </p>
        </div>
      </header>

      <section className="portfolio-section">
        <div className="container">
          
          {/* Main Featured Project */}
          <div className="project-showcase reveal">
            <div className="project-hero">
              <img src="/projects/hero-project.jpg" alt="Mrs. Aarany House - Completed construction" />
              <div className="project-hero-overlay">
                <div>
                  <h2 className="project-title">Mrs. Aarany House</h2>
                  <div className="project-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Suthumalai, Jaffna
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details">
              <div className="project-description">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--hf-white)" }}>Project Overview</h3>
                <p>
                  A complete ground-up residential build delivered in 7 meticulously
                  planned phases. This modern family home features robust structural
                  engineering, premium masonry, and state-of-the-art MEP integration.
                  From the initial earthworks to the final handover, the HOUSEFIX team
                  ensured every detail met rigorous quality standards.
                </p>
              </div>
              <div className="project-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">Client</span>
                  <span className="meta-value">Mrs. Aarany</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Services Provided</span>
                  <span className="meta-value">Design & Construction</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Status</span>
                  <span className="meta-value" style={{ color: "var(--hf-success)" }}>Completed</span>
                </div>
              </div>
            </div>

            <div className="project-gallery">
              <h3>Construction Gallery</h3>
              <div className="gallery-grid">
                <div className="gallery-img">
                  <img src="/projects/aarany-1.jpg" alt="Phase 1: Structural works" />
                </div>
                <div className="gallery-img">
                  <img src="/projects/aarany-2.jpg" alt="Phase 3: Masonry and roofing" />
                </div>
                <div className="gallery-img">
                  <img src="/projects/aarany-3.jpg" alt="Phase 6: Interior finishes" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Project Showcase */}
          <div className="project-showcase reveal" style={{ marginTop: "4rem" }}>
            <div className="project-hero">
              <img src="/projects/p05-exterior-1.jpg" alt="Modern residential project - Exterior patio view" />
              <div className="project-hero-overlay">
                <div>
                  <h2 className="project-title">Residential Project — Jaffna</h2>
                  <div className="project-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Jaffna District
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details">
              <div className="project-description">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--hf-white)" }}>Project Overview</h3>
                <p>
                  A premium residential build showcasing modern exterior finishes,
                  stonework detailing, and spacious patio design. This project
                  features high-quality door installations, decorative wall
                  treatments, and a carefully curated material palette that
                  balances aesthetics with durability.
                </p>
              </div>
              <div className="project-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">Services Provided</span>
                  <span className="meta-value">Design, Construction & Finishes</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Status</span>
                  <span className="meta-value" style={{ color: "var(--hf-success)" }}>Completed</span>
                </div>
              </div>
            </div>

            <div className="project-gallery">
              <h3>Gallery</h3>
              <div className="gallery-grid">
                <div className="gallery-img">
                  <img src="/projects/p05-exterior-2.jpg" alt="Stone wall detailing and exterior finish" />
                </div>
                <div className="gallery-img">
                  <img src="/projects/p05-interior-1.jpg" alt="Premium door installation and interior work" />
                </div>
                <div className="gallery-img">
                  <img src="/projects/p03-1.jpg" alt="Construction progress photography" />
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Projects */}
          <div style={{ marginTop: "5rem" }}>
            <h2 className="section-title text-center reveal">Projects In <span className="text-gradient">Progress</span></h2>
            
            <div className="upcoming-projects">
              <div className="upcoming-card reveal">
                <div className="upcoming-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3>Kishokumar Home</h3>
                <p>Location: Jaffna District</p>
                <div style={{ marginTop: "1rem", display: "inline-block", padding: "4px 12px", background: "rgba(245, 158, 11, 0.1)", color: "var(--hf-warning)", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600" }}>Phase 2: Foundation</div>
              </div>
              
              <div className="upcoming-card reveal">
                <div className="upcoming-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3>Commercial Renovation</h3>
                <p>Location: Manipay</p>
                <div style={{ marginTop: "1rem", display: "inline-block", padding: "4px 12px", background: "rgba(245, 158, 11, 0.1)", color: "var(--hf-warning)", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600" }}>Planning Stage</div>
              </div>

              <div className="upcoming-card reveal">
                <div className="upcoming-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>Smart Home Retrofit</h3>
                <p>Location: Puththur</p>
                <div style={{ marginTop: "1rem", display: "inline-block", padding: "4px 12px", background: "rgba(42, 111, 212, 0.1)", color: "var(--hf-blue-sky)", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600" }}>Primeware Integration</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container reveal">
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Your project could be next</h2>
          <p style={{ color: "var(--hf-silver)", marginBottom: "2rem" }}>Let&#39;s build something extraordinary together.</p>
          <Link href="/quote" className="btn btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}
