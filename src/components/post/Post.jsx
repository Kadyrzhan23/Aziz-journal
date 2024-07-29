import React from "react";
import styles from "./Post.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function Post({ post ,index}) {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper} onClick={()=> navigate(`/post/${index + 1}`)}>
      <div className={styles.header}>
        <img src="./post/user.png" alt="" className={styles.avatar} />
        <div className={styles.postInfo}>
          <div className={styles.postInfo_col}>
            <div className={styles.postInfo_font}>{t("postAvtor") + ":"}</div>
            <div className={styles.postInfo_font}>{t("postTema") + ":"}</div>
          </div>
          <div className={styles.postInfo_col}>
            <div className={styles.postInfo_font}>Сафонов Николай</div>
            <div className={styles.postInfo_font}>Lorem ipsum</div>
          </div>
        </div>
      </div>
    </div>
  );
}
