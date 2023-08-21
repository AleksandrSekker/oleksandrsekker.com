import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./sass/sidebar.module.scss";
import { routes } from "~/constants/general";
import Link from "next/link";

const variants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
      when: "afterChildren", // Stagger first, then animate the sidebar
      delayChildren: 0.2, // Delay before starting stagger animation
    },
    x: -1000,

  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
      delayChildren: 0.2, // Delay before starting stagger animation
      when: "beforeChildren", // Animate the sidebar first, then stagger
    },
    x: 0,

  },
};
interface ToggleInterface {
  toggle: () => void;
  isOpen: boolean;
}
export const Navigation = ({ toggle, isOpen }: ToggleInterface) => (
  <motion.ul className={styles.ul} variants={variants}>
    {routes.map(({ icon, title, link, id }) => (
      <Link
        href={isOpen ? link : ""}
        onClick={isOpen ? toggle : () => null}
        key={id}
      >
        <MenuItem icon={icon} text={title} key={id} />
      </Link>
    ))}
  </motion.ul>
);
