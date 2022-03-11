import './App.css';
import React, { useContext } from 'react';
import Users from './store/Context'
import UsersList from './Components/UsersList'
import { Route, Routes, Navigate } from 'react-router-dom'
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Header from './Components/Header';
import { Auth } from './store/Auth/Auth.Context';

function App() { 
  const [state, dispatch] = useContext( Auth )
  
  if(state.isAuthenticated) {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={ <h3>Home Page</h3> } />
          <Route path='users' element={ <UsersList/> } />
        </Routes>
      </div>
    )
  } else {
    return (
      <div>
        <Routes>
          <Route path='/sign-in' element={ <SignIn /> } />
          <Route path='/sign-up' element={ <SignUp /> } />
          <Route path='*' element={<Navigate to="/sign-in"/>} />
        </Routes>
      </div>
    );
  }

}

export default App;
