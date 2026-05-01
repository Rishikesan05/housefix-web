import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <img src="/logo.png" alt="HOUSEFIX.LK" width={44} height={44} />
              <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--hf-white)" }}>
                HOUSEFIX<span style={{ color: "var(--hf-blue-sky)" }}>.LK</span>
              </span>
            </Link>
            <p>
              From blueprint to beautiful. We design, build, and renovate homes
              with engineering precision and modern craftsmanship across Jaffna
              and Sri Lanka.
            </p>
            <div className="footer-socials">
              <a href="https://web.facebook.com/HOUSEFIX.LK" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/housefix.lk" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/housefix.lk" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://youtube.com/@housefix-lk" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--hf-navy)"/></svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <Link href="/services" className="footer-link">Home Design</Link>
            <Link href="/services" className="footer-link">Custom Construction</Link>
            <Link href="/services" className="footer-link">Renovation & Remodeling</Link>
            <Link href="/services" className="footer-link">Interior Design</Link>
            <Link href="/services" className="footer-link">Smart Home Systems</Link>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/projects" className="footer-link">Our Projects</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
            <Link href="/quote" className="footer-link">Request a Quote</Link>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:+94765604711">+94 76 560 4711</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@housefix.lk">info@housefix.lk</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Jaffna, Sri Lanka</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} HOUSEFIX.LK (PVT) LTD. All rights reserved.</p>
          <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Powered by{" "}
            <img src="/primeware-logo.png" alt="Primeware" style={{ height: "20px", width: "auto", opacity: 0.6, verticalAlign: "middle" }} />
          </p>
        </div>
      </div>
    </footer>
  );
}
