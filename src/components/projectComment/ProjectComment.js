import React from "react";
import { useState } from "react";
import { useAuthContext } from "../../hook/useContext";
import { timestamp } from "../../firebase/config";
import { v4 as uuidv4 } from "uuid";

export default function ProjectComment() {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext;

  const handleSubmit = (e) => {
    e.preventDefault();

    const addComment = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      comment: newComment,
      createAt: timestamp.fromDate(new Date()),
      id: uuidv4(),
    };
    console.log(addComment);
  };

  return (
    <div>
      <h4>Comments</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button>Send</button>
      </form>
    </div>
  );
}
