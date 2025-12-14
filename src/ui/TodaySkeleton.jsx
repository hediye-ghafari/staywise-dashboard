import styled from "styled-components";
import Skeleton from "./Skeleton";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function TodaySkeleton() {
  return (
    <List>
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} height="4.8rem" />
      ))}
    </List>
  );
}

export default TodaySkeleton;
