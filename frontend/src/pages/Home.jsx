import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.page}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.left}>
          <img src="/img3.png" alt="Logo" style={styles.logo} />
          <span style={styles.webName}>PlacementReady</span>
        </div>

        <div style={styles.right}>
          <Link to="/signup" style={styles.signupBtn}>Signup</Link>
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        </div>
      </div>

      <section style={styles.hero}>
  <div style={styles.heroContent}>
    
    <h1 style={styles.heroTitle}>
      Crack Your Dream Placement <span style={{fontSize:"3.2rem"}}>🚀</span>
    </h1>

    <p style={styles.heroText}>
      PlacementReady is a complete preparation platform designed to help
      students succeed in campus placements with confidence.
    </p>

    <p style={styles.heroText}>
      We provide structured aptitude practice, technical training,
      mock interviews, resume guidance, and communication skill development
      to ensure you are industry-ready.
    </p>

    <p style={styles.heroSubText}>
      Start preparing today and move one step closer to your dream company.
    </p>

    <div style={styles.heroButtons}>
      <Link to="/login" style={styles.primaryBtn}>
  Start Your Journey
</Link>



      <Link to="/about" style={styles.secondaryBtn}>
        Explore More
      </Link>
    </div>

  </div>
</section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>

        <div style={styles.featuresGrid}>
          <div style={styles.card}>
            <h3>📊 Smart Assessments</h3>
            <p>Practice aptitude, coding & interview questions with real-time feedback.</p>
          </div>

          <div style={styles.card}>
            <h3>📈 Progress Tracking</h3>
            <p>Monitor your performance and identify areas to improve.</p>
          </div>

          <div style={styles.card}>
            <h3>🎯 Career Guidance</h3>
            <p>Get expert tips and personalized recommendations.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 PlacementReady. All rights reserved.
      </footer>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "#fff",
  },
  heroSubText: {
  fontSize: "1rem",
  marginBottom: "35px",
  opacity: 0.85,
  lineHeight: "1.6",
},


  /* Top Bar */
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 50px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
  },

  webName: {
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  right: {
    display: "flex",
    gap: "15px",
  },

  signupBtn: {
    padding: "8px 18px",
    backgroundColor: "#22c55e",
    color: "#fff",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "600",
  },

  loginBtn: {
    padding: "8px 18px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "600",
  },

  /* Hero */
  hero: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "100px 20px 120px 20px",  // Reduced spacing
  marginTop:"-50px",
},

  heroContent: {
  maxWidth: "850px",
},

heroTitle: {
  fontSize: "3rem",
  marginBottom: "25px",
},

heroText: {
  fontSize: "1.15rem",
  marginBottom: "18px",
  lineHeight: "1.7",
  opacity: 0.9,
},

  heroButtons: {
    marginTop:"70px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom:"-95px",
  },



  primaryBtn: {
    padding: "12px 30px",
    backgroundColor: "#22c55e",
    borderRadius: "30px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
  },

  secondaryBtn: {
    padding: "12px 30px",
    border: "2px solid #fff",
    borderRadius: "30px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
  },

  /* Features */
  featuresSection: {
    padding: "80px 40px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: "50px",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "30px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    transition: "transform 0.3s ease",
  },

  footer: {
    textAlign: "center",
    padding: "25px",
    fontSize: "14px",
    opacity: 0.8,
    marginTop:"-50px",
  },
};

export default Home;
