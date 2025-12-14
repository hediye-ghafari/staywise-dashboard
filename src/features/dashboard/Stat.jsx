import styled from "styled-components";
import { motion } from "framer-motion";

const StyledStat = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  gap: 1.6rem;
`;

const Icon = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-${(props) => props.color}-100);
  color: var(--color-${(props) => props.color}-700);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-500);
`;

const Value = styled.p`
  font-size: 3rem;
  font-weight: 600;
`;

const MotionStat = motion.create(StyledStat);

function Stat({ title, value, icon, color }) {
  return (
    <MotionStat
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Icon color={color}>{icon}</Icon>
      <Content>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Content>
    </MotionStat>
  );
}

export default Stat;
