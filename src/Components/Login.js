import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom"; // Import useHistory and Link
import firebase from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory(); // Create a history object

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setError(null);
        // If login is successful, navigate to the homepage (change '/homepage' to your homepage route)
        history.push("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link> {/* Add the Signup link */}
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
