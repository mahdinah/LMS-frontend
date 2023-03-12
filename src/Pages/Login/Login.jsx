import React, { useState } from "react";
import axios from "axios";
import API from '../../api';


const LoginForm = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  function handleLogin(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
  
    
    axios.post("/login", { email: email.value, password: password.value })
      .then(({ data: { access_token } }) => {
        console.log(access_token);
        onLogin(access_token);
      })
      .catch(err => {
        console.log(err)
        console.log(err.message)
   })
  }
  

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("http://127.0.0.1:8000/api/register", formData)
      .then((response) => {
        // handle success response
        console.log(response.data);
        onRegister(response.data.access_token);
      })
      .catch(err => {
        console.log(err)
        console.log(err.message)
   })
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
          <div className="d-grid gap-2 mt-3">
            {isRegistering ? (
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            )}
            <button type="button" className="btn btn-link" onClick={toggleForm}>
              {isRegistering ? "Sign In Instead" : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;