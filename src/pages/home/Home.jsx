import React from "react";
import styles from "./Home.module.css";
import { Container } from "@mui/material";
import Section from "./animate-section/Section_3";
import RecentPosts from "./recentPosts/RecentPosts";
import { useTranslation } from "react-i18next";
import LastPosts from "./last-posts/LastPosts";
export default function Home() {
  const {t} = useTranslation()
  return (
    <div>
      <div className={`${styles.section_1}`}>
        <Container maxWidth="xl">
          <div className={styles.section_1_row_1}>
            <img src="/public/icon-tdau2.png" alt="" width="64" height="64" />
            <img src="/public/oliy-logo2.png" alt="" width="44" height="44" />
            <img
              src="/public/kafedra-logo2.png"
              alt=""
              width="54"
              height="54"
            />
          </div>
          <p className={styles.section_1_row_2}>
            {/* WORL AND SCIENCE DEVELOPMENT JOURNAL */}
            {
              t("mainH1")
            }
          </p>
          <p className={`${styles.section_1_row_3}`}>
            {t("mainH2")}
          </p>

          <Section />
        </Container>
      </div>
      <div className={styles.section_02}>Недавные посты</div>
      <div className={styles.section_03}>
        <div className={styles.section_03_row_01}>
          <RecentPosts />
          <LastPosts/>
        </div>
      </div>
    </div>
  );
}
