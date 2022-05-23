import React from "react";
import { useState } from "react";
import { useAuthContext } from "../../hook/useContext";
import { useFirestore } from "../../hook/useFirestore";
import { timestamp } from "../../firebase/config";
import Avatar from "../Avatar/Avatar";
import { v4 as uuidv4 } from "uuid";

//style
import {
  AvatarBox,
  CommentFlexWrapper,
  CommentWrap,
  CommentWrapper,
  NameDateFelx,
} from "./ProjectComment.styled";

export default function ProjectComment({ project }) {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("projects");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addComment = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      comment: newComment,
      createAt: timestamp.fromDate(new Date()),
      id: uuidv4(),
    };
    await updateDocument(project.id, {
      comments: [...project.comments, addComment],
    });
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <CommentWrapper>
      <h4>Comments</h4>
      <section>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <CommentFlexWrapper key={comment.id}>
              <Avatar src={comment.photoURL} />
              <CommentWrap>
                <NameDateFelx>
                  <h4>{comment.displayName}</h4>
                  <span>{comment.createAt.toDate().toLocaleTimeString()}</span>
                </NameDateFelx>
                <p>{comment.comment}</p>
              </CommentWrap>
            </CommentFlexWrapper>
          ))}
      </section>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            placeholder="Add new comment"
          ></textarea>
        </label>
        <button>Post</button>
      </form>
    </CommentWrapper>
  );
}
