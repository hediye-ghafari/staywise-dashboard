import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Skeleton = styled.div`
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

export default Skeleton;
