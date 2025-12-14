import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

import { useTodayActivity } from "./useTodayActivity";

import TodayItem from "./TodayItem";
import EmptyState from "../../ui/EmptyState";
import TodaySkeleton from "../../ui/TodaySkeleton";

const StyledToday = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    padding: 2.4rem;
  }

  @media (max-width: 640px) {
    padding: 1.6rem;
  }
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>

      {isLoading ? (
        <TodaySkeleton />
      ) : activities.length > 0 ? (
        <TodayList>
          {activities.map((activity) => (
            <TodayItem key={activity.id} activity={activity} />
          ))}
        </TodayList>
      ) : (
        <EmptyState
          title="No activity today"
          description="Your daily activity will appear here."
        />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
