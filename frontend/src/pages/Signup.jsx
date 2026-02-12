import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) return alert("Enter valid email");
    if (password.length < 6) return alert("Password must be 6+ chars");

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save role in Firestore
      await setDoc(doc(db, "users", user.uid), { email, role });

      // Save user locally for ProtectedRoute
      localStorage.setItem("user", JSON.stringify({ email: user.email, role }));

      alert("Account created!");
      navigate(role === "faculty" ? "/faculty-dashboard" : "/student-dashboard");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account 🚀</h2>

        <input type="email" placeholder="Email" style={styles.input} value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" style={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
        <select style={styles.input} value={role} onChange={e => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>

        <button style={styles.btn} onClick={handleSignup} disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#1e3c72", fontFamily: "Segoe UI" },
  card: { background: "#fff", padding: "40px", borderRadius: "20px", width: "350px", textAlign: "center", boxShadow: "0 15px 40px rgba(0,0,0,0.2)" },
  title: { marginBottom: "20px", color: "#1e3c72" },
  input: { width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px", border: "1px solid #ccc" },
  btn: { width: "100%", padding: "12px", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "10px", cursor: "pointer" }
};

export default Signup;
