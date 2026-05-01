"use client";

export default function Loading() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "var(--hf-navy-deep)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}>
      {/* Spinner */}
      <div style={{
        width: "50px",
        height: "50px",
        border: "3px solid rgba(42, 111, 212, 0.2)",
        borderTopColor: "var(--hf-blue-sky)",
        borderRadius: "50%",
        animation: "counter-spin 1s linear infinite",
        marginBottom: "20px"
      }} />
      
      {/* Brand Text */}
      <div style={{
        fontSize: "1.2rem",
        fontWeight: 700,
        color: "var(--hf-white)",
        letterSpacing: "2px",
        animation: "pulse-dot 2s infinite ease-in-out"
      }}>
        HOUSEFIX<span style={{ color: "var(--hf-blue-sky)" }}>.LK</span>
      </div>
    </div>
  );
}
