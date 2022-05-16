import { useState } from "react";
import { useAuthContext } from "./useContext";
import { ACTIONS } from "../context/authContext";

// import firsebase modules
import { auth, storage } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

export const useSignup = () => {
  // error and loading state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // dispatch from context to detect action
  const { dispatch } = useAuthContext();

  // signup with 3 params
  const signup = async (displayName, email, password, userImg) => {
    // init error and loading status
    setError(null);
    setLoading(true);

    // connect with firebase
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      // Show error if there's no response
      if (!res) {
        throw new Error(
          "Could not complete sign up, please try after few minutes"
        );
      }

      // create a folder to upload user img
      // const uploadPath = `userImage/${res.user.uid}/`;
      // const img = await storage.ref(uploadPath).put(userImg);
      // const imgURL = await getDownloadURL(imgRef);

      const imgRef = ref(storage, `userImage/${res.user.uid}/${userImg.name}`);
      await uploadBytes(imgRef, userImg).then(() => {
        // console.log("Image uploaded");
        getDownloadURL(ref(storage, imgRef)).then((url) => {
          updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: url,
          });
        });
      });

      // update user displayname and photo

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
