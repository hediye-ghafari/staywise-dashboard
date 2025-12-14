import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import { useCabins } from "../cabins/useCabins";

import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import StatSkeleton from "../../ui/StatSkeleton";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1.6rem;
  }
`;

function DashboardLayout() {
  const { bookings = [], isLoading: isLoading1 } = useRecentBookings();
  const {
    confirmedStays = [],
    isLoading: isLoading2,
    numDays,
  } = useRecentStays();
  const { cabins = [], isLoading: isLoading3 } = useCabins();

  const isLoading = isLoading1 || isLoading2 || isLoading3;

  return (
    <StyledDashboardLayout>
      {isLoading ? (
        <>
          <StatSkeleton />
          <StatSkeleton />
          <StatSkeleton />
          <StatSkeleton />
        </>
      ) : (
        <Stats
          bookings={bookings}
          confirmedStays={confirmedStays}
          numDays={numDays}
          cabinCount={cabins.length}
        />
      )}

      <TodayActivity />

      {!isLoading && confirmedStays.length > 0 && (
        <DurationChart confirmedStays={confirmedStays} />
      )}

      {!isLoading && bookings.length > 0 && (
        <SalesChart bookings={bookings} numDays={numDays} />
      )}
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
