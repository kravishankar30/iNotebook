import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();
  const host = "https://inotebook-api-30tl.onrender.com/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password,cpassword } = credentials;
    if (password !== cpassword) {
      props.showAlert("Password and Confirm Password does not match.", "warning");
    } else {
      const response = await fetch(`${host}api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert("Account Created Successfully", "success");
      } else {
        props.showAlert("Invalid credentials", "danger");
      }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-2">
      <h1 className="mb-3">Sign Up to use iNotebook</h1>
      <span>Don't have an account? Don't worry! Sign up now to access all the features of iNotebook!</span>
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" autoComplete = "on" className="form-control" name="name" id="name" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" autoComplete = "on" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" autoComplete = "on" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input type="password" autoComplete = "on" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
