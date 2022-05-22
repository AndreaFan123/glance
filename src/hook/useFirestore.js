import { useReducer, useEffect, useState } from "react";
import { db, timestamp } from "../firebase/config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

let initStatus = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

// action types
const ACTIONS = {
  IS_LOADING: "isLoading",
  ADDED_DOC: "addDoc",
  UPDATE_DOC: "updateDoc",
  DEL_DOC: "delDoc",
  ERROR: "error",
};

// create reducer func
const responseReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.IS_LOADING:
      return { isLoading: true, document: null, success: null, error: null };
    case ACTIONS.ADDED_DOC:
      return {
        isLoading: false,
        document: action.payload,
        suceess: true,
        error: null,
      };
    case ACTIONS.UPDATE_DOC:
      return {
        isLaoding: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case ACTIONS.DEL_DOC:
      return { isLoading: false, document: null, success: true, error: null };
    case ACTIONS.ERROR:
      return {
        isLaoding: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (_collection) => {
  const [response, dispatch] = useReducer(responseReducer, initStatus);
  const [isCancelled, setIsCancelled] = useState(false);

  // get collection reference
  const refDoc = collection(db, _collection);
  // console.log(refDoc);

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add document
  const addDocument = async (doc) => {
    dispatch({ type: ACTIONS.IS_LOADING });
    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await addDoc(refDoc, { ...doc, createdAt });
      dispatchIfNotCancelled({
        type: ACTIONS.ADDED_DOC,
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // update document
  const updateDocument = async (id, updates) => {
    dispatch({ type: ACTIONS.IS_LOADING });
    try {
      const updateRef = doc(refDoc, id);
      const updatedDoc = await updateDoc(updateRef, updates);

      dispatchIfNotCancelled({
        type: ACTIONS.UPDATE_DOC,
        payload: updatedDoc,
      });
      // since we need to render out the comment details, we need to return data
      return updateDocument;
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }
  };

  // delete document
  const deletedocment = async (id) => {
    dispatch({ type: ACTIONS.IS_LOADING });
    try {
      await deleteDoc(doc(refDoc, id));
      dispatchIfNotCancelled({ type: ACTIONS.DEL_DOC });
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, updateDocument, deletedocment, response };
};
