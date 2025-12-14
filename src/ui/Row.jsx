import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;

      @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
