import React from "react";
import Post from "../../components/post/Post";
import styles from "./Posts.module.css";
import { useSelector } from "react-redux";
export default function Posts() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const allPosts = useSelector((state) => state.post.allPosts);
  return (
    <div className={styles.wrapper}>
      {allPosts &&
        allPosts.map((post, index) => {
          return <Post index={index} post={post} />;
        })}
    </div>
  );
}
