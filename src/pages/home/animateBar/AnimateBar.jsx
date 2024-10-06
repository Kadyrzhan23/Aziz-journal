import React from "react";
import styles from "./AnimateBar.module.css";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AnimateBar() {
  const { t } = useTranslation();
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const url = [
    `url(./post/amarant.jpg)`,
    `url(./post/medical1.jpg)`,
    `url(./post/post2.jpg)`,
    `url(./post/medical2.jpg)`,
  ];
  const title = [];
  const links = [];
  const allPosts = useSelector((state) => state.post.allPosts);
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.tempWrapper}>
        <div className={styles.box}></div>
        <div className={styles.barWrapper}>
          <div className={styles.bar}>
            {allPosts ? (
              allPosts.map((elem, index) => {
                return (
                  <>
                    {index < 7 && (
                      <div
                        className={styles.barElem}
                        key={elem}
                        style={{ backgroundImage: elem.img }}
                      >
                        {elem.title}
                        {/* <Button className={styles.btn}>Подобнее</Button> */}
                        <button
                          className={styles.button}
                          // href={`post/${index + 1}`}
                          size="small"
                          variant="contained"
                          color="error"
                          onClick={() =>
                            navigate(`post/${index + 1}`)
                          }
                        >
                          {t("btnPodrobnee")}
                        </button>
                      </div>
                    )}
                  </>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
