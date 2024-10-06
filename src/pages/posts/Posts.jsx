import React from "react";
import Post from "../../components/post/Post";
import styles from './Posts.module.css'
export default function Posts() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={styles.wrapper}>
      {arr.map((post,index) => {
        return <Post index={index}/>;
      })}
    </div>
  );
}
