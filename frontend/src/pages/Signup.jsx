// src/pages/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase"; // your Firebase config
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Basic validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save role in Firestore
      await setDoc(doc(db, "users", user.uid), { email, role });

      alert("Account Created Successfully 🎉");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.message); // show proper Firebase error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account 🚀</h2>
        <p style={styles.subtitle}>Start your placement preparation journey</p>

        <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
          <input
            type="email"
            placeholder="Enter your Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            style={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>

          <button style={styles.signupBtn} type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginLink}>Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "45px",
    width: "380px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: { marginBottom: "8px", color: "#1e3c72" },
  subtitle: { fontSize: "14px", marginBottom: "25px", color: "#6b7280" },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  signupBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "20px",
  },
  loginText: { fontSize: "14px" },
  loginLink: { color: "#22c55e", fontWeight: "600", textDecoration: "none" },
};

export default Signup;
