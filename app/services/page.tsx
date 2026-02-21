export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "white"
    }}>

      <h1 style={{
        fontSize: "64px",
        fontWeight: "bold",
        background: "linear-gradient(90deg, #00c6ff, #0072ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "20px"
      }}>
        DD Technologies Corporation
      </h1>

      <p style={{
        fontSize: "20px",
        maxWidth: "700px",
        marginBottom: "40px",
        opacity: 0.8
      }}>
        Plataforma corporativa central que integra Inteligencia Artificial,
        Investigación, Educación, Desarrollo de Software y Expansión Tecnológica.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <button style={{
          padding: "14px 30px",
          borderRadius: "8px",
          border: "none",
          background: "#00c6ff",
          color: "black",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Explorar Divisiones
        </button>

        <button style={{
          padding: "14px 30px",
          borderRadius: "8px",
          border: "1px solid #00c6ff",
          background: "transparent",
          color: "white",
          cursor: "pointer"
        }}>
          Control Center
        </button>
      </div>

    </main>
  );
}