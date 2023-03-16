  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import API from "../../api";
  

  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email,
          password,
        });

        const { access_token } = response.data;
        localStorage.setItem("token", access_token);

        // Check if email and token exist
        if (email && access_token) {
          // Redirect to the admin panel
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
          alert("Welcome Back " + email);
          setTimeout(() => {
            window.location.href = "/admin/panel";
          }, 1000);
        } else {
          // Show an error message to the user
          alert("Wrong email or password");
        }
      } catch (error) {
        console.error(error.response.data.errors);
        // Show an error message to the user
        alert("Error:check your email or password");
      }
    };

    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">
              {isRegistering ? "Register" : "Sign In"}
            </h3>
            {isRegistering && (
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            {!isRegistering && (
              <div className="forgot-password">
                <a href="./">Forgot Password?</a>
              </div>
            )}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            <button type="submit" className="btn btn-primary mt-3">
              {isRegistering ? "Register" : <a className="Signin">Sign In</a>}
            </button>
            {!isRegistering && (
              <div className="contact-link mt-3">
                <span>
                  Don't have an account?
                  <a className="contactus" href="mailto:mahdinah98@gmail.com">
                    <b>Contact Us</b>
                  </a>
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  };
  export default LoginForm;
