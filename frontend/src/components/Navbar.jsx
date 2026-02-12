import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>


    </div>
  );
};

const styles = {
  nav: {
    backgroundColor: "#0b5ed7",
    padding: "15px",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
