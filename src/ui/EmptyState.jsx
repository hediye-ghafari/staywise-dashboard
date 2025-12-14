import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "./Heading";

const StyledEmptyState = styled(motion.div)`
  background-color: var(--color-grey-0);
  border: 1px dashed var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 4.8rem;
  text-align: center;
  grid-column: 1 / -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  svg {
    width: 4.8rem;
    height: 4.8rem;
    color: var(--color-grey-400);
  }

  p {
    color: var(--color-grey-500);
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    padding: 3.2rem;
    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 640px) {
    padding: 2.4rem;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function EmptyState({ title, description, icon }) {
  return (
    <StyledEmptyState variants={variants} initial="hidden" animate="visible">
      {icon}
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </StyledEmptyState>
  );
}

export default EmptyState;
