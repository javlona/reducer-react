export const ADD_USER = "addUser";
export const UPDATE_USER = "updateUser";
export const DELETE_USER = "deleteUser";
export const SELECT_USER = "selectUser";

function reducer(state, action) {
    switch(action.type) {
        case ADD_USER:
            return [...action.payload];
        case UPDATE_USER:
            const updated = state.map(user => user.id === action.payload.id ? {...user, ...action?.payload} : user)
            return [...updated];
        case DELETE_USER:
            const newList = state.filter(user => user.id !== action.payload)
            return newList;
        default: 
         return state
    } 
}

export default reducer;