import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Welcome, {user?.email}</h2>
        <p>Role: {user?.role}</p>
        <button style={styles.btn} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  page: { minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center", background:"#1e3c72", fontFamily:"Segoe UI" },
  card: { background:"#fff", padding:"40px", borderRadius:"20px", textAlign:"center", boxShadow:"0 15px 40px rgba(0,0,0,0.2)" },
  btn: { padding:"12px", borderRadius:"10px", border:"none", background:"#ef4444", color:"#fff", cursor:"pointer", marginTop:"15px" }
};

export default StudentDashboard;
