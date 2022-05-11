import { createContext, useReducer } from "react";

//initiate value
export const initVal = {
  user: null,
};

// create context obj
export const AuthContext = createContext();

// create actions
export const ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
};

// create reducer func
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, user: action.payload };
    case ACTIONS.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

// export a context provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initVal);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
