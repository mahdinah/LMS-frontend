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



  function handleLogin(event) {
    event.preventDefault();
    console.log(email, password); // log email and password values to console

    if (!email || !password) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    API.post("/login", { email, password })
      .then(({ data: { access_token } }) => {
        localStorage.setItem("access_token", access_token, 1);
        axios
          .get(`http://127.0.0.1:8000/api/users?access_token=${access_token}`)
          .then((response) => {
            const user = response.data[0];
            if (user.role === "admin") {
              // Redirect to admin panel page
              window.location.href = "/profile";
            } else {
              // Redirect to user dashboard page
              window.location.href = "/dashboard";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    if (!name || !email || !password) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    API.post("/register", formData)
      .then((response) => {
        // handle success response
        console.log(response.data);
        setSuccessMessage("Registration successful!");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };



  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{isRegistering ? "Register" : "Sign In"}</h3>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!isRegistering && (
            <div className="forgot-password">
              <a href="./">Forgot Password?</a>
            </div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <button type="submit" className="btn btn-primary mt-3">
            {isRegistering ? "Register" : <a href="./admin/panel" className="Signin">Sign In</a>}
          </button>
          {!isRegistering && (
            <div className="register-link mt-3">
              <span>Don't have an account?        </span>
              <a href="#" onClick={toggleForm}> 
                Register Now
              </a>
            </div>
          )}
          {isRegistering && (
            <div className="login-link mt-3">
              <span>Already have an account?        </span>
              <a href="./Login" onClick={toggleForm}>
                Sign In Now
              </a>
            </div>
          )}
        </div>
      </form>
    </div>
  );
          }
          export default LoginForm;  