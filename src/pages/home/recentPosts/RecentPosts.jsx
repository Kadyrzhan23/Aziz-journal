import React from "react";
import Post from "../../../components/post/Post";
import styles from "./RecentPosts.module.css";
export default function () {
  const posts = [1, 2];
  return (
    <div className={styles.container}>
      {posts !== null && (
        <>
          {posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })}
        </>
      )}
    </div>
  );
}
