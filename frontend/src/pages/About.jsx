import React from "react";

const About = () => {
  return (
    <div style={styles.page}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.left}>
          <img src="/img3.png" alt="Logo" style={styles.logo} />
          <span style={styles.webName}>PlacementReady</span>
        </div>

        <div style={styles.right}>
          <a href="/signup" style={styles.signupBtn}>Signup</a>
          <a href="/login" style={styles.loginBtn}>Login</a>
        </div>
      </div>

      {/* Content Box */}
      <div style={styles.card}>
        <h1 style={styles.title}>About PlacementReady</h1>

        <p style={styles.text}>
          PlacementReady is a smart web platform designed to help students
          confidently prepare for campus placements and job interviews.
          Our mission is to bridge the gap between academic learning
          and industry expectations.
        </p>

        <div style={styles.section}>
          <h2 style={styles.subTitle}>🎯 Who Can Use This Platform?</h2>
          <p style={styles.text}>
            College students, final-year students, freshers, and job seekers
            who want structured guidance for placement preparation.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subTitle}>🚀 Key Features</h2>
          <ul style={styles.list}>
            <li>Skill-based performance rating</li>
            <li>Aptitude and technical practice modules</li>
            <li>Mock tests and interview questions</li>
            <li>Progress tracking dashboard</li>
            <li>Feedback-driven improvement system</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subTitle}>📊 Rating System</h2>
          <p style={styles.text}>
            Ratings are calculated based on test scores, consistency,
            module completion, and performance analytics to reflect
            overall placement readiness.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subTitle}>📩 Contact Information</h2>
          <p style={styles.text}>
            Email: placementreadiness@gmail.com <br />
            Contact: +91 98765 43210
          </p>
        </div>

        <p style={styles.footer}>
          Made with ❤️ to empower students for successful careers.
        </p>
      </div>
    </div>
  );
};

const styles = {
  /* Full Page White */
  page: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    fontFamily: "Segoe UI, sans-serif",
  },

  /* Top Bar */
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 50px",
    backgroundColor: "#000",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logo: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
  },

  webName: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "bold",
  },

  right: {
    display: "flex",
    gap: "15px",
  },

  signupBtn: {
    padding: "8px 16px",
    backgroundColor: "#22c55e",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "20px",
    fontWeight: "600",
  },

  loginBtn: {
    padding: "8px 16px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "20px",
    fontWeight: "600",
  },

  /* Content Box */
  card: {
  maxWidth: "900px",
  margin: "60px auto",
  padding: "50px",
  backgroundColor: "#dbeafe",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
},


  title: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "30px",
    color: "#111827",
  },

  section: {
    marginTop: "30px",
  },

  subTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#1f2937",
  },

  text: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#374151",
  },

  list: {
    marginLeft: "20px",
    lineHeight: "1.8",
    color: "#374151",
  },

  footer: {
    marginTop: "40px",
    textAlign: "center",
    fontStyle: "italic",
    color: "#6b7280",
  },
};

export default About;
