import React, { useEffect, useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import styles from "./Section_03.module.css";
export default function Section() {
  const [isVisible, setVisible] = useState(false);
  const hexagonAnimate = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      // rotate:20 * custom,
      transition: { delay: custom * 0.2},
    }),
  };

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <motion.div initial="hidden" whileInView={"visible"}>
      <motion.div animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} class={`${styles.hexagon_1} ${styles.hexagon}`}></motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }} variants={hexagonAnimate} custom={2} class={`${styles.hexagon_2} ${styles.hexagon}`}></motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }} variants={hexagonAnimate} custom={3} class={`${styles.hexagon_3} ${styles.hexagon}`}></motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }} variants={hexagonAnimate} custom={4} class={`${styles.hexagon_4} ${styles.hexagon}`}></motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }} variants={hexagonAnimate} custom={5} class={`${styles.hexagon_5} ${styles.hexagon}`}></motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }} variants={hexagonAnimate} custom={6} class={`${styles.hexagon_6} ${styles.hexagon}`}></motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }} variants={hexagonAnimate} custom={7} class={`${styles.hexagon_7} ${styles.hexagon}`}></motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }} variants={hexagonAnimate} custom={8} class={`${styles.hexagon_8} ${styles.hexagon}`}></motion.div>


    </motion.div>
  );
}
