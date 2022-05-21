import { useState } from "react";
import { useAuthContext } from "./useContext";
import { auth, db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { ACTIONS } from "../context/authContext";
// import { useEffect } from "react";

export const useLogout = () => {
  // const [cancelChangeState, setCancelChangeState] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setLoading(true);

    try {
      // Change online status from true to false
      const { uid } = user;
      const updateRef = doc(db, "users", uid);
      await updateDoc(updateRef, { online: false });

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
  return { logout, loading, error };
};
