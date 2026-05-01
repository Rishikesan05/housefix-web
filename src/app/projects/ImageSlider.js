"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export default function ImageSlider({ images, alt = "Project photo" }) {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const trackRef = useRef(null);
  const total = images.length;

  const goTo = useCallback((idx) => {
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
    setTranslateX(0);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  /* Touch / pointer events */
  const onPointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches?.[0]?.clientX || 0);
    setTranslateX(0);
  };
  const onPointerMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || e.touches?.[0]?.clientX || 0;
    setTranslateX(x - startX);
  };
  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (translateX < -50) next();
    else if (translateX > 50) prev();
    setTranslateX(0);
  };

  return (
    <div className="slider-root">
      {/* Navigation Arrows */}
      {current > 0 && (
        <button className="slider-arrow slider-arrow-left" onClick={prev} aria-label="Previous image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
      )}
      {current < total - 1 && (
        <button className="slider-arrow slider-arrow-right" onClick={next} aria-label="Next image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      )}

      {/* Image Track */}
      <div
        className="slider-viewport"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onTouchStart={(e) => onPointerDown(e.touches[0])}
        onTouchMove={(e) => onPointerMove(e.touches[0])}
        onTouchEnd={onPointerUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          className="slider-track"
          style={{
            transform: `translateX(calc(-${current * 100}% + ${isDragging ? translateX : 0}px))`,
            transition: isDragging ? "none" : "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {images.map((src, i) => (
            <div className="slider-slide" key={i}>
              <img
                src={src}
                alt={`${alt} — ${i + 1} of ${total}`}
                draggable={false}
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Counter & Dots */}
      <div className="slider-controls">
        <span className="slider-counter">{current + 1} / {total}</span>
        <div className="slider-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
