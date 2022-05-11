import { useState } from "react";
import { useAuthContext } from "./useContext";
import { ACTIONS } from "../context/authContext";

// import firsebase modules
import { firebaseAuth } from "../firebase/.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  // error and loading state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // dispatch from context to detect action
  const { dispatch } = useAuthContext();

  // signup with 3 params
  const signup = async (email, password, name) => {
    // init error and loading status
    setError(null);
    setLoading(true);

    // connect with firebase
    try {
      const res = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      // Show error if there's no response
      if (!res) {
        throw new Error("Could not complete signup, please try after few mins");
      }

      await updateProfile(firebaseAuth.currentUser, {
        name: name,
      });

      dispatch({
        type: ACTIONS.LOGIN,
        payload: res.user,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use");
      } else if (error.code === "auth/weak-password") {
        setError("Password needs to be at least 6 characters or digits");
      } else if (error.code === "auth/invalid-email") {
        setError("Email is invalid, kindly try again");
      } else if (error.code === "auth/internal-error") {
        setError("Empty input filed");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading, error };
};
