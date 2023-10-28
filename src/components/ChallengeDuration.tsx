import {
  add,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { useTranslations } from "src/i18n/utils";

interface Props {
  startTime: Date;
  endTime: Date;
  lang: string;
}

const ChallengeDuration = ({
  startTime: startDate,
  endTime: endDate,
  lang,
}: Props) => {
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  const end = add(endDate, { seconds: 1 });

  const daysDifference = differenceInDays(end, startDate);
  const hoursDifference = differenceInHours(end, startDate) % 24;
  const minutesDifference = differenceInMinutes(end, startDate) % 60;

  let result = "";
  const t = useTranslations(lang === "en" ? "en" : lang === "es" ? "es" : "en");

  if (daysDifference > 0) {
    result += `${daysDifference} ${
      daysDifference !== 1 ? t("common-days") : t("common-day")
    } `;
  }

  if (hoursDifference > 0) {
    result += `${hoursDifference} ${
      hoursDifference !== 1 ? t("common-hours") : t("common-hour")
    } `;
  }

  if (minutesDifference > 0) {
    result += `${minutesDifference} ${t("common-minutes")} `;
  }

  return result.trim();
};

export default ChallengeDuration;
