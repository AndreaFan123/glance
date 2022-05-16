import { useState } from "react";
import { useAuthContext } from "./useContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { ACTIONS } from "../context/authContext";
// import { useEffect } from "react";

export const useLogout = () => {
  // const [cancelChangeState, setCancelChangeState] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setLoading(true);

    try {
      await signOut(auth).then(() => {
        dispatch({
          type: ACTIONS.LOGOUT,
        });
      });
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { logout };
};
