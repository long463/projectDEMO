import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  function login() {
    const user = props.users.find(u => u.email === email && u.password === password);
    if (user) setMsg("Welcome, " + user.name + "!");
    else setMsg("Wrong email or password!");
  }

  return (
    <div  
      style={{
        maxWidth: 400,
        margin: "60px auto",
        padding: "32px 24px",
        textAlign: "center",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        background: "lightlinear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif"
      }}
    >
      <h2 style={{ marginBottom: 24, color: "#2d3e50", letterSpacing: 1 }}>Login</h2>
      <input
        style={{
          width: "100%",
          padding: "12px",
          margin: "8px 0",
          borderRadius: "8px",
          border: "1px solid #bfc9d4",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box"
        }}
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        style={{
          width: "100%",
          padding: "12px",
          margin: "8px 0",
          borderRadius: "8px",
          border: "1px solid #bfc9d4",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box"
        }}
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        style={{
          width: "100%",
          padding: "12px",
          margin: "16px 0 8px 0",
          borderRadius: "8px",
          border: "none",
          background: "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(78,84,200,0.08)"
        }}
        onClick={login}
      >
        Login
      </button>
      <p style={{ color: msg.startsWith("Welcome") ? "#27ae60" : "#e74c3c", fontWeight: "500", minHeight: "24px" }}>{msg}</p>
      <p>
        <button
          onClick={props.switchPage}
          style={{
            background: "none",
            border: "none",
            color: "#4e54c8",
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "15px",
            marginTop: "8px"
          }}
        >
          Go to Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;
