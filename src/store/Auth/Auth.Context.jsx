import React, { createContext, useReducer } from "react";
import reducer from './authReducer'

const Auth = createContext();

const initialState = {
  user: {},
  isAuthenticated: false,
  token: null,
}

function AuthContext(props) {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Auth.Provider
      value={[
        state,
        dispatch
      ]}
    >
      {props.children}
    </Auth.Provider>
  );
}

export { Auth };
export default AuthContext;
