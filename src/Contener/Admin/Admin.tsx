function Admin() {
  return (
    <div className="Admin" onClick={(e) => e.preventDefault()}>
      <h4 style={{ textAlign: "left", paddingLeft: "0.8rem" }}>Admin Login</h4>
      <form action="/" style={{ marginTop: " 0.6rem" }}>
        <input
          type="email"
          placeholder="Admin Email"
          style={{ margin: "0.4rem 0", padding: "4px " }}
          required
        />
        <input
          type="password"
          placeholder="Admin password"
          style={{ margin: "0.4rem 0", padding: "4px " }}
          required
        />
        <button type="submit" style={{ margin: "0.4rem 0", padding: "4px " }}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Admin;
