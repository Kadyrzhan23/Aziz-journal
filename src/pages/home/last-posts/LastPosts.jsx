import React from "react";
import styles from "./LastPosts.module.css";
import LastPost from "../../../components/lastPost/LastPost";
export default function LastPosts() {
    const posts = [1,2,3,4]
  return <div className={styles.wrapper}>
    {
        posts !== null && (
            <>
            {
                posts.map((post,index) =>{
                    return (
                        <LastPost key={index} index={index} post={post}/>
                    )
                })
            }
            </>
        )
    }
  </div>;
}
