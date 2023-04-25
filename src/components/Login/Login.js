import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [login, setLogin] = useState({});
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    axios
      .post("http://192.168.29.226:4001/auth/user-signin", login)
      .then((response) => {
        localStorage.setItem("token", response?.data?.token);
        if (response.data.message) {
          setLoginStatus(response.data.message);
        }
        else{
          navigate('/dashboard')
        }
      });
  };
  return (
    <div className="loginpage">
      <div className="login-container">
        <div className="left-container">
          <h1 className="login-heading">Login to Your Account</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
              className="input-fild"
              type="text"
              placeholder=" User Name"
            />
            <input
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              className="input-fild"
              type="password"
              placeholder=" Password"
              autoComplete="new-password"
            />
            <div>
              <a className="forgot" href="/forgot">
                Forgot Password
              </a>
            </div>
            <button type="submit" className="sing-in">
              Sign in
            </button>
          </form>
        </div>
        <div className="right-container">
          <h1>New Here ?</h1>
          <a href="/register">
            <button className="sign-up">Sign Up</button>
          </a>
          <h5>{loginStatus}</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
