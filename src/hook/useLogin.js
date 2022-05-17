import { useState } from "react";
import { useAuthContext } from "./useContext";
import { ACTIONS } from "../context/authContext";

import { auth, db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  // sign in with email and password
  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    // connect with firebase
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      console.log(res);

      if (!res) {
        throw new Error("Could not logout, please try again");
      }

      // update online status
      const userID = res.user.uid;
      const updateRef = doc(db, "users", userID);
      await updateDoc(updateRef, { online: true });

      dispatch({
        type: ACTIONS.LOGIN,
        payload: res.user,
      });
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading, error };
};
