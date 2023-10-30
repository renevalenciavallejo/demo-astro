import { format } from "date-fns";
import enUS from "date-fns/locale/en-US/index.js";
import es from "date-fns/locale/es/index.js";

export enum ChallengeDateFormat {
  Basic = "PP",
  Short = "PPP",
  Long = "PPPPp",
}

interface Props {
  date: Date;
  lang: string;
  dateFormat: ChallengeDateFormat;
}

const locales: Record<string, Locale> = {
  en: enUS,
  es: es,
};

const ChallengeDate = ({ date, lang, dateFormat }: Props) => {
  date = new Date(date);
  const localDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

  const locale = locales[lang] || enUS;
  return format(localDate, dateFormat, { locale });
};

export default ChallengeDate;
