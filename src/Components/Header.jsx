import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <Link to='/'>Home</Link>
        <Link to='users'>User List</Link>
        <Link to='sign-up'>Sign Up</Link>
    </div>
  )
}

export default Header