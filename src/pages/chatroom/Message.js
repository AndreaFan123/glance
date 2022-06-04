import React, { useState, useRef, useEffect } from "react";
import { useCollection } from "../../hook/useCollection";
import { ImgWrapper, MsgsWrapper, MsgWrapper } from "./Message.styled";
import { COLORS } from "../../components/constants";
import { auth } from "../../firebase/config";

export default function Message({ uid }) {
  const { documents, error } = useCollection("messages", null, ["createdAt"]);
  const { loading, isLoading } = useState(false);
  const scrollBehav = useRef();

  useEffect(() => {
    scrollBehav.current.scrollIntoView({ behavior: "smooth" });
  }, [documents]);

  return (
    <>
      {documents &&
        documents.map((msg) => (
          <MsgWrapper
            style={{
              flexDirection:
                msg.uid === auth.currentUser.uid ? "row-reverse" : "",
            }}
            key={msg.id}
          >
            <img src={msg.photoURL} />
            <p
              style={{
                backgroundColor:
                  msg.uid === auth.currentUser.uid
                    ? `${COLORS.mainColor}`
                    : `${COLORS.mainColorLighter}`,
              }}
            >
              {msg.text}
            </p>
          </MsgWrapper>
        ))}
      <span ref={scrollBehav}></span>
    </>
  );
}
