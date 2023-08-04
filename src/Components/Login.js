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
    <div className="profile"> 
      <h2>Login</h2>
      <div className="p-5 ">
        <form className="rounded border border-primary-subtle p-4 bg-dark text-white">
          <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input 
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              value={email}
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control" 
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link> {/* Add the Signup link */}
          </p>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;