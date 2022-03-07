import './App.css';
import React, { useContext } from 'react';
import Users from './store/Context'
import UsersList from './Components/UsersList'

function App() {
  const [state, dispatch] = useContext(Users)
  console.log("this is state", state)

  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
