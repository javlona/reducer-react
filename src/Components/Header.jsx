import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../store/Auth/Auth.Context'
import { SIGN_OUT } from '../store/Auth/authReducer'

function Header() {
  const [state, dispatch] = useContext( Auth )
  const singOutHandler = () => {
    dispatch({
      type: SIGN_OUT,
    })
  }

  return (
    <div className="header">
        <Link to='/'>Home</Link>
        <Link to='users'>User List</Link>
        <button onClick={singOutHandler}>Sign Out</button>
    </div>
  )
}

export default Header