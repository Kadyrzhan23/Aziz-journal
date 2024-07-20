import React from "react";
import styles from "./LastPost.module.css";
export default function LastPost({ post, index }) {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}
