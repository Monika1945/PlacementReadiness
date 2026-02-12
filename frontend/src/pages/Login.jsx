import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, db } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Common function to handle redirection based on role
  const handleUserRedirection = (user, roleFromDB) => {
    // Handling case sensitivity (e.g., 'Student' to 'student')
    const role = roleFromDB ? roleFromDB.toLowerCase() : "student";
    
    // 1. Save to localStorage
    const userData = { email: user.email, role: role, uid: user.uid };
    localStorage.setItem("user", JSON.stringify(userData));

    // 2. Clear Console for debugging
    console.log("Redirecting user with role:", role);

    // 3. Direct Navigation
    if (role === "faculty") {
      navigate("/faculty-dashboard");
    } else {
      navigate("/student-dashboard");
    }
  };

  // Email/Password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        handleUserRedirection(user, docSnap.data().role);
      } else {
        alert("Account exists but no role assigned in Firestore. Defaulting to student.");
        handleUserRedirection(user, "student");
      }
    } catch (error) {
      console.error("Login Error:", error.code);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      let role = "student"; 

      if (!docSnap.exists()) {
        // First-time user: Save to Firestore
        await setDoc(docRef, { 
            email: user.email, 
            role: role,
            createdAt: new Date()
        });
      } else {
        role = docSnap.data().role;
      }

      handleUserRedirection(user, role);
    } catch (error) {
      console.error("Google Login Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Login to continue your placement journey</p>

        <form onSubmit={handleEmailLogin}>
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

          <button style={styles.loginBtn} type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div style={styles.divider}>
          <hr style={styles.line} />
          <span style={styles.orText}>OR</span>
          <hr style={styles.line} />
        </div>

        <button style={styles.googleBtn} onClick={handleGoogleLogin} disabled={loading} type="button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="google"
            style={styles.googleIcon}
          />
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>

        <p style={styles.signupText}>
          New user?{" "}
          <Link to="/signup" style={styles.signupLink}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

// Styles (unchanged but kept for completeness)
const styles = {
  page: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #1e3c72, #2a5298)", fontFamily: "Segoe UI, sans-serif" },
  card: { backgroundColor: "#ffffff", padding: "40px", width: "350px", borderRadius: "20px", boxShadow: "0 15px 40px rgba(0,0,0,0.2)", textAlign: "center" },
  title: { marginBottom: "8px", color: "#1e3c72" },
  subtitle: { fontSize: "14px", marginBottom: "25px", color: "#6b7280" },
  input: { width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc", boxSizing: "border-box" },
  loginBtn: { width: "100%", padding: "12px", backgroundColor: "#3b82f6", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "600", cursor: "pointer", marginBottom: "20px" },
  divider: { display: "flex", alignItems: "center", marginBottom: "20px" },
  line: { flex: 1, height: "1px", backgroundColor: "#ccc", border: "none" },
  orText: { margin: "0 10px", color: "#6b7280", fontWeight: "600" },
  googleBtn: { width: "100%", padding: "12px", backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" },
  googleIcon: { width: "20px", height: "20px", marginRight: "10px" },
  signupText: { fontSize: "14px" },
  signupLink: { color: "#22c55e", fontWeight: "600", textDecoration: "none" },
};

export default Login;