// Get real time document and listen whenever the document is changed

import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
// import { useHistory } from "react-router-dom";

export const useDocument = (_collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //realtime data
  useEffect(() => {
    const docRef = doc(db, _collection, id);
    // const docSnap = getDoc(docRef);

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("No such doc exists");
        }
      },
      (err) => {
        // const history = useHistory();
        console.log(err.message);
        setError("Failed to get document");
        // history.push("/dashboard");
      }
    );
    return () => unsubscribe();
  }, [_collection, id]);

  return { document, error };
};
