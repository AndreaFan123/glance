import React, { useState } from "react";
import { useAuthContext } from "../../hook/useContext";
import { useFirestore } from "../../hook/useFirestore";
import Message from "./Message";
import {
  ChatRoomWrapper,
  FlexNormal,
  FlexStretch,
  Form,
  FormWrapper,
} from "./ChatRoom.styled";

export default function ChatRoom() {
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("messages");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState(null);

  function scrollView() {
    const mainRoot = document.getElementById("main-root");
    mainRoot.scrollIntoView({ behavior: "smooth" });
  }

  const handleSendMessage = async (e) => {
    e.preventDefault();

    setFormError(null);

    const messages = {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: message,
    };

    // console.log(messages);

    await addDocument(messages);

    setMessage("");
  };

  return (
    <>
      <ChatRoomWrapper>
        <Message user={user.uid} />
      </ChatRoomWrapper>
      <FormWrapper>
        <Form onSubmit={handleSendMessage}>
          <FlexStretch>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say helloooo"
            />
          </FlexStretch>
          <FlexNormal>
            <button type="submit" disabled={!message}>
              Send
            </button>
          </FlexNormal>
        </Form>
      </FormWrapper>
    </>
  );
}
