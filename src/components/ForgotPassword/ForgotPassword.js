import axios from "axios";
import React, { useState } from "react";
const ForgotPassword = (props) => {
  const [forgot, setForgot] = useState({});
  const [status, setStatus] = useState("");
  const handleForgotPassword = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.29.226:4001/user/user-forgotpassword", forgot)
      .then((response) => {
        console.log(response.data.Token);
       
        if (response.data.Token.message) {
          setStatus(response.data.Token.message);
        } if(response.data.message) {
          setStatus(response.data.message);
        }
        else{
console.log("success");
        }
      }); 
  };

  return (
    <div className="forgotpage">
      <div className="forgot-container" style={{background:"rgba(13, 137, 108, 0.879)"}}>
        <h1 style={{color:"white"}}>Forgot Password</h1>
        <form onSubmit={handleForgotPassword} className="forgot-form">
          <input style={{paddingLeft:"15px"}}
            onChange={(e) => setForgot({ ...forgot, email: e.target.value })}
            className="input-fild"
            type="text"
            placeholder="Email"
          />
          <button style={{background:"white",color:"rgba(13, 137, 108, 0.879)",marginTop:"25px",fontWeight:"700"}} type="submit" className="submit-button">
            Submit
          </button>
          <h6 style={{color:"white"}}>{status}</h6>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
