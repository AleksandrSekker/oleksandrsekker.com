import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./sass/sidebar.module.scss";
import { routes } from "~/constants/general";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul className={styles.ul} variants={variants}>
    {routes.map(({ icon, title, link, id }) => (
      <Link href={link} key={id}>
        <MenuItem icon={icon} text={title} key={id} />
      </Link>
    ))}
  </motion.ul>
);
