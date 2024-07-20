import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Section() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <AnimatePresence>
      <div class="hexagon-1 hexagon"></div>
      <div class="hexagon-2 hexagon"></div>
      <div class="hexagon-3 hexagon"></div>
      <div class="hexagon-4 hexagon"></div>
      <div class="hexagon-5 hexagon"></div>
    </AnimatePresence>
  );
}
