import React from "react";

const CV = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#302c2c",
        color: "#ffffff",
        margin: 0,
        padding: 0,
      }}
    >
      <header
        style={{
          backgroundColor: "#000",
          textAlign: "center",
          padding: "5% 0",
        }}
      >
        <h1>Julianne Denise P. Igonia</h1>
        <h3>Student | Lyceum of Alabang</h3>
        <p>Email: juliannedeniseigonia18@gmail.com</p>
      </header>

      <div style={{ width: "80%", margin: "20px auto", padding: "20px" }}>
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ backgroundColor: "#000", padding: "10px" }}>About Me</h2>
          <p>
            I'm Julianne Denise P. Igonia, a dedicated third-year student at
            Lyceum of Alabang. Passionate about learning, I actively engage in
            my studies and embrace challenges that contribute to my growth.
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ backgroundColor: "#000", padding: "10px" }}>Skills</h2>
          <ul>
            <li>Drawing</li>
            <li>Design</li>
          </ul>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ backgroundColor: "#000", padding: "10px" }}>Contact</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              textAlign: "center",
            }}
          >
            <div>
              <p>Email</p>
              <p>juliannedeniseigonia18@gmail.com</p>
            </div>
            <div>
              <p>Phone</p>
              <p>+63 936 804 9175</p>
            </div>
            <div>
              <p>GitHub</p>
              <p>
                <a
                  href="https://github.com/yourgithubprofile"
                  target="_blank"
                  style={{ color: "#4da6ff" }}
                >
                  GitHub Profile
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
