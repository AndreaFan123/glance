import { useEffect, useState, useRef } from "react";
import { db } from "../firebase/config";
import {
  collection,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export const useCollection = (_collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const queryRef = useRef(_query).current;
  const orderByRef = useRef(_orderBy).current;

  useEffect(() => {
    let expenseRef = collection(db, _collection);
    // console.log(ref);

    if (queryRef) {
      expenseRef = query(expenseRef, where(...queryRef));
    }
    if (orderByRef) {
      expenseRef = query(expenseRef, orderBy(...orderByRef));
    }
    const unsubscribe = onSnapshot(
      expenseRef,
      (querySnapshot) => {
        let results = [];
        querySnapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        // console.log(results);
        if (results) {
          setDocuments(results);
          console.log(results);
        }

        if (!results) {
          setDocuments(null);
          console.log(results);
        }

        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection, queryRef, orderByRef]);

  return { documents, error };
};
