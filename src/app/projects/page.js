import Link from "next/link";
import ImageSlider from "./ImageSlider";
import YouTubeEmbed from "./YouTubeEmbed";
import "./projects.css";

export const metadata = {
  title: "Our Projects | HOUSEFIX.LK",
  description:
    "Explore our portfolio of completed construction, renovation, and engineering projects across Jaffna, Colombo, and Sri Lanka. Real projects. Real results.",
};

/* ──────────────────────────────────────────────
   Image arrays — every approved photo, in order
   ────────────────────────────────────────────── */

const p01Images = [
  "/projects/p01/HF_P01_Structure_001_insta_wm.jpg",
  "/projects/p01/HF_P01_Structure_004_insta_wm.jpg",
  "/projects/p01/HF_P01_Structure_011_insta_wm.jpg",
  "/projects/p01/HF_P01_Chainlink_fence_012_insta_wm.jpg",
  "/projects/p01/HF_P01_Apiary_008_insta_wm.jpg",
  "/projects/p01/HF_P01_Bannister_005_insta_wm.jpg",
  "/projects/p01/HF_P01_Park_bench_002_insta_wm.jpg",
  "/projects/p01/HF_P01_Sandbar_006_insta_wm.jpg",
];

const p03Images = [
  "/projects/p03/Post - 01.png",
  "/projects/p03/1 (5).jpg",
  "/projects/p03/1 (1).jpg",
  "/projects/p03/1 (2).jpg",
  "/projects/p03/1 (3).jpg",
  "/projects/p03/1 (4).jpg",
  "/projects/p03/1 (6).jpg",
  "/projects/p03/1 (7).jpg",
  "/projects/p03/1 (8).jpg",
];

const p04Images = [
  "/projects/p04/HF_P04_Lumbermill_001_insta.jpg",
  "/projects/p04/HF_P04_Forklift_002_insta.jpg",
  "/projects/p04/HF_P04_Lumbermill_003_insta.jpg",
  "/projects/p04/HF_P04_Lumbermill_004_insta.jpg",
  "/projects/p04/HF_P04_Bow_005_insta.jpg",
  "/projects/p04/HF_P04_Breakwater_006_insta.jpg",
  "/projects/p04/HF_P04_Bannister_007_insta.jpg",
  "/projects/p04/HF_P04_Patio_008_insta.jpg",
  "/projects/p04/HF_P04_Sandbar_009_insta.jpg",
];

const p05Images = [
  "/projects/p05/HF_P05_Patio_006_insta.jpg",
  "/projects/p05/HF_P05_Stone_wall_004_insta.jpg",
  "/projects/p05/HF_P05_Stone_wall_005_insta.jpg",
  "/projects/p05/HF_P05_Patio_020_insta.jpg",
  "/projects/p05/HF_P05_Patio_022_insta.jpg",
  "/projects/p05/HF_P05_Patio_031_insta.jpg",
  "/projects/p05/HF_P05_Patio_035_insta.jpg",
  "/projects/p05/HF_P05_Door_009_insta.jpg",
  "/projects/p05/HF_P05_Door_019_insta.jpg",
  "/projects/p05/HF_P05_Door_021_insta.jpg",
  "/projects/p05/HF_P05_Door_026_insta.jpg",
  "/projects/p05/HF_P05_Guillotine_013_insta.jpg",
  "/projects/p05/HF_P05_Structure_014_insta.jpg",
  "/projects/p05/HF_P05_Bannister_023_insta.jpg",
  "/projects/p05/HF_P05_Doormat_010_insta.jpg",
  "/projects/p05/HF_P05_Home_theater_028_insta.jpg",
  "/projects/p05/HF_P05_Cinema_032_insta.jpg",
  "/projects/p05/HF_P05_Thatch_003_insta.jpg",
  "/projects/p05/HF_P05_Forklift_002_insta.jpg",
  "/projects/p05/HF_P05_Indigo_bunting_001_insta.jpg",
];

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */

export default function ProjectsPage() {
  return (
    <>
      <header className="projects-header">
        <div className="container reveal">
          <div className="section-label">Our Portfolio</div>
          <h1>
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p>
            Every building has a story. Here are some of ours — real projects,
            delivered with precision engineering and quality craftsmanship across
            Sri Lanka.
          </p>
        </div>
      </header>

      <section className="portfolio-section">
        <div className="container">
          {/* ════════════════════════════════════════════════════════
              1 — Performance‑Driven Warehouse · Puththur, Jaffna
              ════════════════════════════════════════════════════════ */}
          <div className="project-showcase reveal">
            <div className="project-showcase-inner">
              <div className="project-media">
                <ImageSlider images={p01Images} alt="Performance-Driven Warehouse" />
              </div>

              <div className="project-info">
                <div className="project-badge">Featured Project</div>
                <h2 className="project-title">Performance‑Driven Warehouse</h2>
                <div className="project-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Puththur, Jaffna
                </div>

                <p className="project-desc">
                  Our newly completed warehouse in Puththur combines
                  high‑performance thermal bubble‑foil insulation with sleek
                  translucent roofing. The smart envelope blocks heat while
                  letting soft daylight flood the interior — creating a
                  comfortable, thermally balanced environment.
                </p>
                <blockquote className="project-quote">
                  &ldquo;At HOUSEFIX.LK, we design industrial spaces that
                  deliver durability, performance, and human comfort.&rdquo;
                </blockquote>

                <div className="project-meta-row">
                  <div className="meta-chip">Industrial / Commercial</div>
                  <div className="meta-chip">Structural Engineering</div>
                  <div className="meta-chip">Thermal Insulation</div>
                  <div className="meta-chip chip-status">Completed</div>
                </div>
              </div>
            </div>

            <div className="project-video-section">
              <h3>Project Video</h3>
              <YouTubeEmbed videoId="UIShJdhVqT4" title="Warehouse construction timelapse — Puththur" />
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              2 — Colombo Construction Site Update 01
              ════════════════════════════════════════════════════════ */}
          <div className="project-showcase project-showcase-video reveal">
            <div className="project-showcase-inner project-showcase-video-only">
              <div className="project-media">
                <YouTubeEmbed videoId="z2x0gkM4bHM" title="Colombo Construction Site — Mechanical Floor Compaction" />
              </div>

              <div className="project-info">
                <div className="project-badge badge-site-update">Site Update</div>
                <h2 className="project-title">Colombo — Construction Site Update 01</h2>
                <div className="project-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Colombo
                </div>

                <p className="project-desc">
                  Efficient Mechanical Floor Compaction for Optimal Concrete
                  Performance. Our advanced compaction techniques ensure a
                  strong, durable, and level surface for commercial construction
                  projects in Colombo.
                </p>

                <div className="project-meta-row">
                  <div className="meta-chip">Civil Engineering</div>
                  <div className="meta-chip">Soil Compaction</div>
                  <div className="meta-chip">Commercial</div>
                  <div className="meta-chip chip-progress">In Progress</div>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              3 — Spiral Staircase · 3D to Final Build · Jaffna
              ════════════════════════════════════════════════════════ */}
          <div className="project-showcase reveal">
            <div className="project-showcase-inner">
              <div className="project-media">
                <ImageSlider images={p03Images} alt="Spiral Staircase — 3D to Final Build" />
              </div>

              <div className="project-info">
                <div className="project-badge">Design to Reality</div>
                <h2 className="project-title">Spiral Staircase — 3D to Final Build</h2>
                <div className="project-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Jaffna
                </div>

                <p className="project-desc">
                  Design. Fabricate. Install. Witness the exact transition from a
                  3D &ldquo;Digital Twin&rdquo; to a physical, high‑grip steel
                  structure. We specialized this spiral for space constraints —
                  combining checker‑plate durability with a minimalist frame.
                </p>
                <blockquote className="project-quote">
                  &ldquo;A masterclass in space-saving design. Custom steel
                  spiral staircase with high-grip checker-plate treads and a
                  sleek minimalist frame.&rdquo;
                </blockquote>

                <div className="project-meta-row">
                  <div className="meta-chip">Digital Twin</div>
                  <div className="meta-chip">Steel Engineering</div>
                  <div className="meta-chip">Checker-Plate Treads</div>
                  <div className="meta-chip chip-status">Completed</div>
                </div>
              </div>
            </div>

            <div className="project-video-section">
              <h3>Project Video</h3>
              <YouTubeEmbed videoId="hb0Uc82y6J0" title="Spiral Staircase — construction to completion" />
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              4 — Colombo Construction Site Update 02
              ════════════════════════════════════════════════════════ */}
          <div className="project-showcase reveal">
            <div className="project-showcase-inner">
              <div className="project-media">
                <ImageSlider images={p04Images} alt="Colombo Construction Site" />
              </div>

              <div className="project-info">
                <div className="project-badge badge-site-update">Site Update</div>
                <h2 className="project-title">Colombo — Construction Site Update 02</h2>
                <div className="project-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Colombo
                </div>

                <p className="project-desc">
                  Progress update from our major Colombo construction site —
                  featuring foundation works, reinforcement, formwork, and
                  heavy-machinery operations. Every phase is managed with
                  strict engineering oversight by HOUSEFIX.LK.
                </p>

                <div className="project-meta-row">
                  <div className="meta-chip">Foundation Works</div>
                  <div className="meta-chip">Reinforcement</div>
                  <div className="meta-chip">Heavy Machinery</div>
                  <div className="meta-chip chip-progress">In Progress</div>
                </div>
              </div>
            </div>

            <div className="project-video-section">
              <h3>Project Video</h3>
              <YouTubeEmbed videoId="z2x0gkM4bHM" title="Colombo construction site — heavy machinery in action" />
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              5 — Modern Residential Transformation · Jaffna
              ════════════════════════════════════════════════════════ */}
          <div className="project-showcase reveal">
            <div className="project-showcase-inner">
              <div className="project-media">
                <ImageSlider images={p05Images} alt="Modern Residential Transformation" />
              </div>

              <div className="project-info">
                <div className="project-badge">Premium Build</div>
                <h2 className="project-title">Modern Residential Transformation</h2>
                <div className="project-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Jaffna District
                </div>

                <p className="project-desc">
                  A premium residential build showcasing modern exterior
                  finishes, natural stonework detailing, spacious patio design,
                  high-quality door installations, home cinema setup, and a
                  carefully curated material palette balancing aesthetics with
                  durability.
                </p>
                <blockquote className="project-quote">
                  &ldquo;Every building has a story. This space was reimagined,
                  redesigned, and transformed into a modern living
                  environment.&rdquo;
                </blockquote>

                <div className="project-meta-row">
                  <div className="meta-chip">Stone Cladding</div>
                  <div className="meta-chip">Patio Design</div>
                  <div className="meta-chip">Home Cinema</div>
                  <div className="meta-chip chip-status">Completed</div>
                </div>
              </div>
            </div>

            <div className="project-video-section">
              <h3>Project Video</h3>
              <YouTubeEmbed videoId="pMzcid5eZqQ" title="Modern residential transformation timelapse" />
            </div>
          </div>

          {/* Upcoming Projects */}
          <div style={{ marginTop: "5rem" }}>
            <h2 className="section-title text-center reveal">
              Projects In <span className="text-gradient">Progress</span>
            </h2>

            <div className="upcoming-projects">
              <div className="upcoming-card reveal">
                <div className="upcoming-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <h3>Kishokumar Home</h3>
                <p>Location: Jaffna District</p>
                <div className="upcoming-status upcoming-warning">Phase 2: Foundation</div>
              </div>

              <div className="upcoming-card reveal">
                <div className="upcoming-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3>Commercial Renovation</h3>
                <p>Location: Manipay</p>
                <div className="upcoming-status upcoming-warning">Planning Stage</div>
              </div>

              <div className="upcoming-card reveal">
                <div className="upcoming-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
                <h3>Smart Home Retrofit</h3>
                <p>Location: Puththur</p>
                <div className="upcoming-status upcoming-blue">Primeware Integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container reveal">
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Your project could be next
          </h2>
          <p style={{ color: "var(--hf-silver)", marginBottom: "2rem" }}>
            Let&#39;s build something extraordinary together.
          </p>
          <Link href="/quote" className="btn btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
