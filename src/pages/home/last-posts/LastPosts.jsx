import React from "react";
import styles from "./LastPosts.module.css";
import LastPost from "../../../components/lastPost/LastPost";
import { useSelector } from "react-redux";
export default function LastPosts() {
    const allPosts = useSelector((state) => state.post.allPosts);

  return <div className={styles.wrapper}>
    {
        allPosts !== null && (
            <>
            {
                allPosts.map((post,index) =>{
                    return (
                        <>
                        {
                            index > 6 &&
                            <LastPost key={index} index={index} post={post}/>
                            }
                        </>
                    )
                })
            }
            </>
        )
    }
  </div>;
}
