import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledEmpty = styled.div`
  text-align: center;
  padding: 3.2rem;
  color: var(--color-grey-500);
`;

const Icon = styled.div`
  font-size: 4.8rem;
  margin-bottom: 1.6rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

function EmptyState({
  icon = "📭",
  title = "Nothing here yet",
  description,
  actionLabel,
  onAction,
}) {
  return (
    <StyledEmpty>
      <Icon>{icon}</Icon>
      <Heading as="h3">{title}</Heading>
      {description && <Description>{description}</Description>}
      {actionLabel && onAction && (
        <Button size="medium" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </StyledEmpty>
  );
}

export default EmptyState;
