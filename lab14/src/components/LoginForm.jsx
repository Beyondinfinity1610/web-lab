import React from "react";

const LoginForm = () => (
  <form style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
    <h2 style={{ textAlign: "center", color: "#333" }}>Novell Services Login</h2>

    <div style={{ marginBottom: "10px" }}>
      <label>Username:</label>
      <input type="text" style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #aaa" }} />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Password:</label>
      <input type="password" style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #aaa" }} />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>City of Employment:</label>
      <input type="text" style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #aaa" }} />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Web server:</label>
      <select style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #aaa" }}>
        <option>— Choose a server —</option>
      </select>
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Please specify your role:</label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label><input type="radio" name="role" /> Admin</label>
        <label><input type="radio" name="role" /> Engineer</label>
        <label><input type="radio" name="role" /> Manager</label>
        <label><input type="radio" name="role" /> Guest</label>
      </div>
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Single Sign-on to the following:</label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label><input type="checkbox" /> Mail</label>
        <label><input type="checkbox" /> Payroll</label>
        <label><input type="checkbox" /> Self-service</label>
      </div>
    </div>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button type="submit" style={{ padding: "8px 15px", backgroundColor: "#4CAF50", color: "white", borderRadius: "5px", border: "none", cursor: "pointer" }}>Login</button>
      <button type="reset" style={{ padding: "8px 15px", backgroundColor: "#f44336", color: "white", borderRadius: "5px", border: "none", cursor: "pointer" }}>Reset</button>
    </div>
  </form>
);

export default LoginForm;
