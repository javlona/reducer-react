import React, {createContext, useState, useEffect, useReducer} from "react";
import reducer from './reducer'

const Users = createContext()

const initialState = [
    {
        id: 1234567,
        name: "Javlon",
        username: "Boy",
        email: "hello@javlon.net",
        address: {
          street: "North",
          suite: "Apt 5",
          city: "Chicago",
          zipcode: "60631",
          geo: {
            lat: "31.3159",
            lng: "41.1496"
          },
        phone: "1-770-736-7777",
        website: "javlon.net",
        company: {
            name: "IBM",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
            }
        }
    }
]

function UsersContext(props) { 
    const[state, dispatch] = useReducer( reducer, initialState )

    return(
        <Users.Provider 
        value={[
            state, 
            dispatch
        ]}>
            {props.children}
        </Users.Provider>
    )
}

export default Users;
export { UsersContext };