import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const[email, setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = ()=>{
    e.preventDefault();
    axios.post('https://localhost:3000/login',{email,password}).then((result)=>{console.log(result)
    if(result.data == "Success"){
      navigate('/')
    }
  }).catch((error)=>{
    console.error(error);
  })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <Link to="/register">Signup</Link>
    </div>
  )
}

export default Login