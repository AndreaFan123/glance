import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

// create context obj
export const AuthContext = createContext();

// create actions
export const ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
  CHECKLOGIN: "checkLogin",
};

export const initStatus = {
  user: null,
  authIsReady: false,
};

export const reducer = (state, action) => {
  // console.log("preveState", state);
  // console.log("action:", action);
  // create actions that identify when dispatch function is triggering
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, user: action.payload };
    case ACTIONS.LOGOUT:
      return { ...state, user: null };
    case ACTIONS.CHECKLOGIN:
      return {
        ...state,
        user: action.payload,
        authIsReady: true,
      };
    default:
      return state;
  }
};

// export a context provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initStatus);

  // console.log("current status: ", state);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS.CHECKLOGIN,
        payload: user,
      });
      subscribe();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
