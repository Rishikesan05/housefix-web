"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="main-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="HOUSEFIX.LK Logo" width={48} height={48} />
          <span className="nav-logo-text">
            HOUSEFIX<span>.LK</span>
          </span>
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="btn btn-primary nav-cta"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
