import { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  function signup() {
    if (!name || !email || !password) {
      setMsg("Fill all fields!");
      return;
    }
    if (props.users.find(u => u.email === email)) {
      setMsg("Email already exists!");
      return;
    }
    props.setUsers([...props.users, { name, email, password }]);
    setMsg("Account created! You can login now.");
    setName(""); setEmail(""); setPassword("");
  }

  return (
    <div style={{backgroundImage:"url(https://i.pinimg.com/736x/47/08/71/47087186d74fa53a8eba13f99f7a6bfc.jpg)"}} className="bg-no-repeat bg-cover h-screen flex items-center justify-center">
      <div
      style={{
        maxWidth: 400,
        margin: "60px auto",
        padding: "32px 24px",
        textAlign: "center",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        background: "black",
        fontFamily: "Segoe UI, Arial, sans-serif"
      }}
    >
      <h2 style={{ marginBottom: 24, color: "white", letterSpacing: 1 }}>Sign Up</h2>
      <input
        style={{
          width: "100%",
          padding: "12px",
          margin: "8px 0",
          borderRadius: "8px",
          border: "1px solid white",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
          color: "white"
        }}
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        style={{
          width: "100%",
          padding: "12px",
          margin: "8px 0",
          borderRadius: "8px",
          border: "1px solid white",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
          color: "white"
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
          border: "1px solid white",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
          color: "white",
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
          background: "#4e54c8",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={signup}
      >
        Sign Up
      </button>
      <p style={{ color: msg.includes("created") ? "#27ae60" : "#e74c3c", fontWeight: "500", minHeight: "24px" }}>{msg}</p>
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
          Go to Login
        </button>
      </p>
    </div>
    </div>);
}

export default SignUp;
