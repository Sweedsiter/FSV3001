import { useState } from "react";

function Admin(props) {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const AdminLogin = (e) => {
    e.preventDefault();
    props.ADlogin(Email === "Peter@gmail.com" && Password === "12345678");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Admin">
      <h4 style={{ textAlign: "left", paddingLeft: "0.8rem" }}>Admin Login</h4>
      <form action="/" style={{ marginTop: " 0.6rem" }} onClick={AdminLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          style={{ margin: "0.4rem 0", padding: "4px " }}
          required
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
        <input
          type="password"
          placeholder="Admin password"
          style={{ margin: "0.4rem 0", padding: "4px " }}
          required
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
        />
        <button type="submit" style={{ margin: "0.4rem 0", padding: "4px " }}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Admin;
