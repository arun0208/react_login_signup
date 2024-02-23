import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { name, email, password }).then((result) => {
            console.log(result)
            navigate('/login')
        }).catch((err) => { console.log(err) })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleName">Name</label>
                    <input type="text" class="form-control" id="exampleName" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }} placeholder="Enter Your Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <Link to="/login">Login</Link> <br />
        </div>
    )
}

export default Signup