import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getPathAfterLang(url: URL) {
  const [, lang, ...pathSegments] = url.pathname.split("/");
  if (lang in ui) {
    return `/${pathSegments.join("/")}`;
  }
  return url.pathname;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function calculateDaysHoursMinutes(
  startDate: Date,
  endDate: Date,
  lang: keyof typeof ui
) {
  const days = differenceInDays(endDate, startDate);
  const t = useTranslations(lang);

  if (days === 0) {
    const hours = differenceInHours(endDate, startDate);

    if (hours === 0) {
      const minutes = differenceInMinutes(endDate, startDate);
      return `${minutes} ${t("common-minutes")}`;
    }

    return hours === 1
      ? `${hours} ${t("common-hour")}`
      : `${hours} ${t("common-hours")}`;
  }

  return days === 1
    ? `${days} ${t("common-day")}`
    : `${days} ${t("common-days")}`;
}
