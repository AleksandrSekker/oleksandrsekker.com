import React, { useRef } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styles from "./sass/sidebar.module.scss";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,

    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,

    },
  },
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  console.log('height', height)
  console.log('containerRef', containerRef)
  return (
    <AnimatePresence>
      <motion.nav
        className={isOpen ? styles.nav : styles.navClosed}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        // initial={'closed'}
        // exit={'closed'}
      >
        <motion.div className={styles.background} variants={sidebar} />
        <Navigation isOpen={isOpen} toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

    </AnimatePresence>
  );
};
export default Sidebar;
