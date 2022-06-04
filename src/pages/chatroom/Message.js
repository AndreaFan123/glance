import React, { useState, useRef } from "react";
import { useCollection } from "../../hook/useCollection";

export default function Message({ user }) {
  const { documents, error } = useCollection("messages");
  const { loading, isLoading } = useState(false);

  console.log(documents);

  return (
    <>
      <div>Lol</div>
    </>
  );
}
