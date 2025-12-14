import styled from "styled-components";
import Skeleton from "./Skeleton";
import { motion } from "framer-motion";

const StyledStatSkeleton = styled(motion.div)`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  gap: 1.6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    justify-items: start;
  }
`;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function StatSkeleton() {
  return (
    <StyledStatSkeleton
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <Skeleton height="6.4rem" width="6.4rem" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Skeleton width="40%" />
        <Skeleton width="70%" height="2.4rem" />
      </motion.div>
    </StyledStatSkeleton>
  );
}

export default StatSkeleton;
