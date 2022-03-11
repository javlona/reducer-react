import React, { createContext } from "react";

const Auth = createContext();

function AuthContext(props) {
  
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

  return (
    <Auth.Provider
      value={{
        changeHandler,
      }}
    >
      {props.children}
    </Auth.Provider>
  );
}

export { Auth };
export default AuthContext;
