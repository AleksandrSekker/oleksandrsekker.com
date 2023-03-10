import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  hoverX?: number | 0;
  hoverY?: number | 0;
};
const RightBlockWrapper = ({ children, className, hoverY, hoverX }: Props) => {
  return (
    <motion.div
      animate={{ x: [50, 0], opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      initial={{ opacity: 1, scale: 0.5 }}
      whileHover={{ scale: 1.1, x: hoverX, y: hoverY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RightBlockWrapper;
