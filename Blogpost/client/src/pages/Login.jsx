import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import Axios from 'axios';
const Login = () => {
  const [inputs,setInputs]=useState({
    username:"",
    password:"",
  })
  const [err,setError]=useState(null)
  const { login } = useContext(AuthContext);
  const handleChange=(e)=>{
    setInputs((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  const navigate=useNavigate()
  console.log('Test1',inputs);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      //const res=await Axios.post("/auth/login",inputs);
      await login(inputs)
      //console.log("Test2",res)
      navigate("/")
      
    }catch(err){
      setError(err.response.data)
      //console.log(err) //"http://localhost:8800/api/auth/register"
    }
  }
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          //required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          //required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {/* <button onClick={handleSubmit}>Login</button> */}
        {err && <p>{err}</p>}  
        
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
