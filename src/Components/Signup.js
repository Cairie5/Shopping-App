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
    <div className="profile">
      <h2>Signup</h2>
      <div className="p-5">
        <form className="bg-dark text-white rounded border border-primary-subtle p-4">
          <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div>
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br/>
          <button type="submit" className="btn btn-primary" onClick={handleSignup}>Signup</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;