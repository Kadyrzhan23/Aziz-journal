import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Post.module.css";
import { useSelector } from "react-redux";
// import image from '../../../public/post/image7.jpg'
export default function Post() {
  const { id } = useParams();
  const allPosts = useSelector((state) => state.post.allPosts);
  const image = `../../../public/.${allPosts[id].image}`;
  const navigate = useNavigate();
  const index = useParams();
  console.log(allPosts[id]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="user.png" alt="" className={styles.avatar} />
        
      </div>
      <div className={styles.section_1}>
        <img
          src={image}
          alt="errorimage"
          className={styles.postImage}
        />
        <div className="">
          <strong>{allPosts[id].title}</strong>
          <p>{allPosts[id].description}</p>
        </div>
      </div>

      <a href={allPosts[id].linkPdf} className={styles.btn}>
        Открыть файл
      </a>
    </div>
  );
}
