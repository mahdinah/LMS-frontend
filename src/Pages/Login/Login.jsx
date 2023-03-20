  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import API from "../../api";
  import Swal from "sweetalert2";
import { Height } from "@material-ui/icons";

  

  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    
    const loggedinsuccess=()=>{
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Welcome Back '+email,
        showConfirmButton: false,
        timer: 1500,
      })
    };
    const loggederror=()=>{
      Swal.fire({
       position: 'top-end',
       icon: 'error',
       title: 'Check your email or password',
       showConfirmButton: false,
       timer: 1500
     })
   };
//    const loggedinsuccess=()=>{
//     Swal.fire({
//      position: 'top-end',
//      icon: 'success',
//      title: 'Welcome Back '+email,
//      showConfirmButton: false,
//      timer: 1500
//    })
//  };
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
          // Redirect to the studen panel(attendece page)
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
        loggedinsuccess();
          setTimeout(() => {
            window.location.href = "/attendance/create";
          }, 500);
        } else {
          // Show an error message to the user
          loggederror();
        }
      } catch (error) {
        console.error(error.response.data.errors);
        // Show an error message to the user
        loggederror();
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
