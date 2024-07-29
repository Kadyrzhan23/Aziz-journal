import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  return <div>Post {id}</div>;
}
