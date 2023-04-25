import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddNewPassword.css";
const AddNewPassword = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [addPassword, setAddPassword] = useState({});

  const handleAddPassword = (e) => {
    e.preventDefault()
    axios
      .post(`http://192.168.29.226:4001/user/user-resetpassword/${params.id}`,addPassword)
      .then((response) => {
        console.log(response);

        
        navigate("/");
      });
      
  };
  return (
    <div className="forgotpage">
      <div className="forgot-container">
        <h1>Add New Password</h1>
        <form onSubmit={handleAddPassword} className="forgot-form">
          <input
            onChange={(e) =>
              setAddPassword({ ...addPassword, password: e.target.value })
            }
            className="input-fild"
            type="text"
            placeholder="Password"
          />
          <input
            s
            onChange={(e) =>
              setAddPassword({
                ...addPassword,
                confirmPassword: e.target.value,
              })
            }
            className="input-fild"
            type="text"
            placeholder="ConfirmPassword"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPassword;
