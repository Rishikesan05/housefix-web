import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
      background: "var(--hf-navy-deep)"
    }}>
      <h1 style={{ 
        fontSize: "8rem", 
        fontWeight: 900, 
        background: "linear-gradient(135deg, var(--hf-blue-sky), var(--hf-blue))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        lineHeight: 1,
        marginBottom: "1rem"
      }}>
        404
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--hf-white)" }}>
        Page Not Found
      </h2>
      <p style={{ color: "var(--hf-silver)", maxWidth: "500px", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable. Let's get you back home.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to Homepage
      </Link>
    </div>
  );
}
