export const SIGN_IN = "signIn";
export const SIGN_OUT = "signOut";
export const SIGN_UP = "signUp";

function reducer(state, action) {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
      return { ...state, user: action.payload.user, isAuthenticated: true };
    case SIGN_OUT:
      return { ...state, user: {}, isAuthenticated: false };
    default:
      return state;
  }
}

export default reducer;
