import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome 👋</h2>
        <p style={styles.email}>{user?.email}</p>

        <div style={styles.buttonContainer}>
          <button style={styles.btn}>Aptitude</button>
          <button style={styles.btn}>Technical</button>
          <button style={styles.btn}>HR Questions</button>
          <button style={styles.btn}>Coding Practice</button>
        </div>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: "40px",
    width: "420px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  },

  title: {
    color: "#1e3c72",
    marginBottom: "5px",
  },

  email: {
    fontSize: "14px",
    marginBottom: "25px",
    color: "#6b7280",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "25px",
  },

  btn: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },

  logoutBtn: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Dashboard;
