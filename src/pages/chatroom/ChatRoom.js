import { limit } from "firebase/firestore";
import React, { useState } from "react";
import { useCollection } from "../../hook/useCollection";
import { useAuthContext } from "../../hook/useContext";
import { useFirestore } from "../../hook/useFirestore";
import Message from "./Message";
import { ChatRoomWrapper } from "./ChatRoom.styled";

export default function ChatRoom() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("messages");
  const { addDocument, response } = useFirestore("messages");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    setFormError(null);

    const messages = {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: message,
    };

    console.log(messages);

    await addDocument(messages);

    setMessage("");
  };

  return (
    <ChatRoomWrapper>
      <h2>Chat room</h2>
      <main>
        <Message user={user} />
      </main>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say helloooo"
        />
        <button type="submit" disabled={!message}>
          Send
        </button>
      </form>
    </ChatRoomWrapper>
  );
}
