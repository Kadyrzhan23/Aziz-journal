import React from "react";
import styles from "./Post.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function Post({ post ,index}) {
  console.log(post)
  const { t } = useTranslation();
  const navigate = useNavigate()
  const image = `../../../public/post/post${index + 1}.jpg`
  return (
    <div className={styles.wrapper} onClick={()=> navigate(`/post/${index}`)}>
      <div className={styles.header}>
        <img src="./post/user.png" alt="" className={styles.avatar} />
        <div className={styles.postInfo}>
          <div className={styles.postInfo_col}>
            <div className={styles.postInfo_font}>{t("postAvtor") + ":"}</div>
            {/* <div className={styles.postInfo_font}>{t("postTema") + ":"}</div> */}
          </div>
          <div className={styles.postInfo_col}>
            {/* <div className={styles.postInfo_font}>Сафонов Николай</div> */}
            {
              post.author.map(person => {
                return(
                  <div className={styles.postInfo_font}>{person}</div>
                )
              })
            }
            {/* <div className={styles.postInfo_font}>Lorem ipsum</div> */}
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <img style={{marginTop:5}} src={post.image} alt="" />
        <div>
        <b>{post.title}</b>
        <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
}
