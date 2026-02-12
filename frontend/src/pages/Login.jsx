import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, provider, db } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (!docSnap.exists()) return alert("No role found!");

      const role = docSnap.data().role;
      localStorage.setItem("user", JSON.stringify({ email: user.email, role }));
      navigate(role === "faculty" ? "/faculty-dashboard" : "/student-dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      let role = "student";
      if (!docSnap.exists()) await setDoc(docRef, { email: user.email, role });
      else role = docSnap.data().role;

      localStorage.setItem("user", JSON.stringify({ email: user.email, role }));
      navigate(role === "faculty" ? "/faculty-dashboard" : "/student-dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login 🔑</h2>
        <input type="email" placeholder="Email" style={styles.input} value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" style={styles.input} value={password} onChange={e=>setPassword(e.target.value)} />
        <button style={styles.btn} onClick={handleEmailLogin} disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        <button style={styles.googleBtn} onClick={handleGoogleLogin} disabled={loading}>Sign in with Google</button>
        <p>New user? <Link to="/signup" style={{color:"#22c55e"}}>Sign Up</Link></p>
      </div>
    </div>
  );
};

const styles = {
  page: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#1e3c72", fontFamily: "Segoe UI" },
  card: { background: "#fff", padding: "40px", borderRadius: "20px", width: "350px", textAlign: "center", boxShadow: "0 15px 40px rgba(0,0,0,0.2)" },
  title: { marginBottom: "20px", color: "#1e3c72" },
  input: { width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px", border: "1px solid #ccc" },
  btn: { width: "100%", padding: "12px", marginBottom: "10px", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "10px", cursor: "pointer" },
  googleBtn: { width: "100%", padding: "12px", background: "#fff", border: "1px solid #ccc", borderRadius: "10px", cursor: "pointer", marginBottom: "15px" }
};

export default Login;
