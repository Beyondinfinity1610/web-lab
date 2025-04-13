import React from "react";

const LoginForm = () => (
  <form style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Novell Services Login</h2>

    <div style={{ marginBottom: "10px" }}>
      <label>Username:</label>
      <input type="text" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Password:</label>
      <input type="password" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>City of Employment:</label>
      <input type="text" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Web server:</label>
      <select style={{ width: "100%", padding: "8px", marginTop: "5px" }}>
        <option>— Select a server —</option>
      </select>
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Select Role:</label>
      <div>
        <label><input type="radio" name="role" value="Admin" /> Admin</label>
        <label><input type="radio" name="role" value="Engineer" /> Engineer</label>
        <label><input type="radio" name="role" value="Manager" /> Manager</label>
        <label><input type="radio" name="role" value="Guest" /> Guest</label>
      </div>
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Single Sign-on:</label>
      <div>
        <label><input type="checkbox" /> Mail</label>
        <label><input type="checkbox" /> Payroll</label>
        <label><input type="checkbox" /> Self-service</label>
      </div>
    </div>

    <div style={{ textAlign: "center" }}>
      <button type="submit" style={{ padding: "8px 20px", marginRight: "10px" }}>Login</button>
      <button type="reset" style={{ padding: "8px 20px" }}>Clear</button>
    </div>
  </form>
);

export default LoginForm;
