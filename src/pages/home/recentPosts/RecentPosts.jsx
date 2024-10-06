import React from "react";
import Post from "../../../components/post/Post";
import styles from "./RecentPosts.module.css";
import { useSelector } from "react-redux";
export default function () {
  const allPosts = useSelector((state) => state.post.allPosts);
  return (
    <div className={styles.container}>
      {allPosts !== null && (
        <>
          {allPosts.map((post, index) => {
            return <>{ index > 7 && index < 10 && <Post key={index} post={post} index={index} />}</>;
          })}
        </>
      )}
    </div>
  );    
}
 