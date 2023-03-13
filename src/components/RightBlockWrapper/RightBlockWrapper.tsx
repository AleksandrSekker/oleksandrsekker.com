import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const RightBlockWrapper = ({ children, className }: Props) => {
  return (
    <motion.div
      animate={{ x: [50, 0], opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      initial={{ opacity: 1, scale: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RightBlockWrapper;
