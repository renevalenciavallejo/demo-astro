import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

interface Props {
  dateUtc: Date
}

const LocalDate = ({ dateUtc }: Props) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDate = utcToZonedTime(dateUtc, userTimeZone);
  
  return format(localDate, " MMM d, yyyy HH:mm:ss (zzzz)");
};

export default LocalDate;