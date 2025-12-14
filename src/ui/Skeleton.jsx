import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const StyledSkeleton = styled(motion.div)`
  height: ${(props) => props.height || "1.6rem"};
  width: ${(props) => props.width || "100%"};
  border-radius: var(--border-radius-sm);

  background: linear-gradient(
    90deg,
    var(--color-grey-100) 25%,
    var(--color-grey-200) 37%,
    var(--color-grey-100) 63%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;

const Skeleton = ({ width, height }) => {
  return (
    <StyledSkeleton
      width={width}
      height={height}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Skeleton;
