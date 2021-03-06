import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [local, setLocal]= useState("")
  const navigate = useNavigate();

  // console.log(BASE_URL);
useEffect(() => {
    const token = localStorage.getItem("token");

    setLocal(token)
    
}, [])
  const signUp = async () => {
    const result = await axios.post(`${BASE_URL}/resgister`, {
      username,
      password,
      role:"61a60aeff378d491f8d63f95",
    });
    console.log(result.data);
    navigate("/login")
  };

  return (
    <div className="mainDiv">
      <h1>Register</h1>
      <input
        type="Username"
        name="Username"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br/>
      <input 
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
            <br/>

      <button  onClick={signUp}>Register</button>
      <br/>

      <Link to="/login">login</Link>
    </div>
  );
};
