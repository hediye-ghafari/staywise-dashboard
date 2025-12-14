import styled from "styled-components";
import Skeleton from "./Skeleton";

const StyledStatSkeleton = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  gap: 1.6rem;
`;

function StatSkeleton() {
  return (
    <StyledStatSkeleton>
      <Skeleton height="6.4rem" width="6.4rem" />
      <div>
        <Skeleton width="40%" />
        <Skeleton width="70%" height="2.4rem" />
      </div>
    </StyledStatSkeleton>
  );
}

export default StatSkeleton;
