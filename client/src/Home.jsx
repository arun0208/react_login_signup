import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home <br/>
        <Link to="/login">Login</Link> <br/>
        <Link to="/register">Signup</Link>
    </div>
  )
}

export default Home