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
    const unsubscribe = onSnapshot(
      doc(db, _collection, id),
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          console.log("Documents all set");
          setError(null);
        } else {
          console.log("Errorrrrrrr");
          setError("No such doc exists");
        }
      },
      (error) => {
        console.log(error.message);
        setError("Failed to get document");
      }
    );
    return () => unsubscribe();
  }, [_collection, id]);

  return { document, error };
};
