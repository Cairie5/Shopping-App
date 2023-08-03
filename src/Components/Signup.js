import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory(); // Create a history object

  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setError(null);
        // If signup is successful, navigate to the homepage (change '/' to your homepage route)
        history.push("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;
