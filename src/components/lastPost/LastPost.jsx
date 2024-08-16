import React, { useEffect } from "react";
import styles from "./LastPost.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function LastPost({ post, index }) {
  const navigate = useNavigate()
  const variants = {
    initial:{
      x:0
    },
    after:{
      x:-10,
      transition:{delay:1}

    }
  }
  return (
    <motion.div
    initial="initial"
    whileHover="after"
    variants={variants}
    className={styles.wrapper} onClick={()=> navigate(`/post/${index + 3}`)}>
      <img
        src={`./post/image${index + 5}.jpg`}
        alt=""
        className={styles.image}
      />
      <div className={styles.postTheme}>
        Контент-анализ публикаций и программ гражданской науки в сфере экологии
      </div>
      <div className={styles.description}>
        Введение. В статье рассмотрены инициативы гражданской науки в сфере
        экологии. Выявлена специфика развития подобных иници­атив в России и в
        зарубежных странах, а также обозначены пер­спективы развития
        экологических инициатив в сфере гражданской науки. Методы исследования.
        Применен общенаучный метод кон­тент-анализа.
      </div>
    </motion.div>
  );
}
