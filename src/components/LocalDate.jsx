import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

function LocalDate({ dateUtc }) {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDate = utcToZonedTime(dateUtc, userTimeZone);

  return (
    <>
      <span>{format(localDate, " MMM d, yyyy HH:mm:ss (zzzz)")}</span>
    </>
  );
}

export default LocalDate;
