import axios from "axios";
import React, { useState } from "react";
import "./CreateAccount.css";
const CreateAccount = () => {
  const [userDatails, setUserDatails] = useState({});
 

const handlesubmit=(e)=>{
  e.preventDefault()
  try{
    axios.post("http://192.168.29.226:4001/user/user-signup", userDatails)
    .then((res) => {
      console.log(res.data);
    })
  }
 
catch(error){
console.log(error);
}
}

  

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="left-container">
          <h1>Welcome Back</h1>
         <a href="/"> <button className="sign-In">Sign In</button></a>
        </div>
        <div className="right-container">
          <h1 className="register-heading">Create Account</h1>
          <form onSubmit={handlesubmit} className="login-form">
            <input
              onChange={(e) =>
                setUserDatails({ ...userDatails, username: e.target.value })
              }
              className="input-fild"
              type="text"
              placeholder=" User Name"
            />
            <input
              onChange={(e) =>setUserDatails({ ...userDatails, name: e.target.value })}
              className="input-fild"
              type="text"
              placeholder=" Name"
            />
            <input
              onChange={(e) => setUserDatails({ ...userDatails, email: e.target.value })}
              className="input-fild"
              type="email"
              placeholder=" Email"
            />
            <input
              onChange={(e) =>
                setUserDatails({ ...userDatails, mobileNo: e.target.value })
              }
              className="input-fild"
              type="string"
              placeholder=" Mobile"
            />
            <input
              onChange={(e) =>
                setUserDatails({ ...userDatails, password: e.target.value })
              }
              className="input-fild"
              type="password"
              placeholder=" Password"
              autoComplete="new-password"
            />
            <input
              onChange={(e) =>
                setUserDatails({
                  ...userDatails,
                  confirmPassword: e.target.value,
                })
              }
              className="input-fild"
              type="password"
              placeholder=" Confirm Password"
            />

            <button  type="submit" className="sing-Up">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
