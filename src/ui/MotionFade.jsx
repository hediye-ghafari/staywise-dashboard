import { motion } from "framer-motion";

function MotionFade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MotionFade;
