import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import EmptyState from "../../ui/EmptyState";
import MotionFade from "../../ui/MotionFade";

function Stats({ bookings = [], confirmedStays = [], numDays, cabinCount }) {
  const hasData = bookings.length > 0 || confirmedStays.length > 0;

  if (!hasData) {
    return (
      <EmptyState
        title="No dashboard data yet"
        description="Once you have bookings or check-ins, key statistics will appear here."
        icon={<HiOutlineChartBar />}
      />
    );
  }

  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + (cur.totalPrice ?? 0), 0);

  const checkins = confirmedStays.length;

  const occupation =
    !cabinCount || !numDays
      ? 0
      : confirmedStays.reduce((acc, cur) => acc + (cur.numNights ?? 0), 0) /
        (numDays * cabinCount);

  return (
    <>
      <MotionFade delay={0}>
        <Stat
          title="Bookings"
          color="blue"
          icon={<HiOutlineBriefcase />}
          value={numBookings}
        />
      </MotionFade>

      <MotionFade delay={0.05}>
        <Stat
          title="Sales"
          color="green"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sales)}
        />
      </MotionFade>

      <MotionFade delay={0.1}>
        <Stat
          title="Check ins"
          color="indigo"
          icon={<HiOutlineCalendarDays />}
          value={checkins}
        />
      </MotionFade>

      <MotionFade delay={0.15}>
        <Stat
          title="Occupancy rate"
          color="yellow"
          icon={<HiOutlineChartBar />}
          value={`${Math.round(occupation * 100)}%`}
        />
      </MotionFade>
    </>
  );
}

export default Stats;
