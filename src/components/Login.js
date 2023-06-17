import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const host = "https://inotebook-api-30tl.onrender.com/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged In Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-2">
      <h1 className="mb-3">Welcome to iNotebook!</h1>
      <span>Login to access all the features of iNotebook! Don't have an account? Don't worry! Click <Link className="link-opacity-50-hover" to="/signup">here</Link> to sign up!</span>

      <form className="my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" autoComplete = "on" id="email" value={credentials.email} name="email" aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" value={credentials.password} autoComplete = "on" className="form-control" id="password" name="password" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
