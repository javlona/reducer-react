import './App.css';
import React, { useContext } from 'react';
import Users from './store/Context'
import UsersList from './Components/UsersList'
import { Route, Routes } from 'react-router-dom'
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Header from './Components/Header';

function App() {
  const [state, dispatch] = useContext(Users)
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <h3>Home Page</h3> } />
        <Route path='users' element={ <UsersList/> } />
        <Route path='sign-in' element={ <SignIn /> } />
        <Route path='sign-up' element={ <SignUp /> } />
      </Routes>
    </div>
  );
}

export default App;
