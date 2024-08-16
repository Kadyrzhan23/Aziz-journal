import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
export default function Post() {
  const { id } = useParams();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  return (
    <div>
      <div className={styles.header}>
        <img src="" alt="" className={styles.avatar} />
      </div>
    </div>
  );
}
