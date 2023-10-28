import { format } from "date-fns";
import { enUS, es } from "date-fns/locale/index.js";

interface Props {
  date: Date;
  lang: string;
  showTime: boolean;
}

const locales: Record<string, Locale> = {
  en: enUS,
  es: es,
};

const ChallengeDate = ({ date, lang, showTime = false }: Props) => {
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
  const dateFormat = showTime ? " PPPPp" : " PPP";
  return format(localDate, dateFormat, { locale });
};

export default ChallengeDate;
