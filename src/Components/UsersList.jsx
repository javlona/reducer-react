import React, { useEffect, useContext } from 'react'
import Users from '../store/Context'
import { ADD_USER, DELETE_USER, UPDATE_USER } from '../store/reducer'
import client from '../utils/axios'
import { FiEdit, FiDelete } from 'react-icons/fi';

function UsersList() {
    const [state, dispatch] = useContext(Users)
    
    useEffect(() => {
        (async()=> {
            try {
                const { data } = await client.get('/users')

                dispatch({
                    type: ADD_USER,
                    payload: data,
                })
            }
            catch(error) {
                console.error(error)
            }
        })()

    }, [])

    const deleteHandler = (id) => {
        dispatch({
           type: DELETE_USER,
           payload: id
        })
    }
    
    console.log(state)

  return (
    <div>
        <h3>User List</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                  state.map((user,index) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company?.name}</td>
                        <td>{user.address?.city}</td>
                        <td>
                            <button onClick={() => deleteHandler(user.id)}><FiDelete /></button>
                            <button onClick={}><FiEdit /></button>
                        </td>
                    </tr>
                    )
                  )  
                }
            </tbody>
        </table>
    </div>
  )
}

export default UsersList