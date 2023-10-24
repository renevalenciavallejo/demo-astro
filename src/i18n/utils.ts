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
  const t = useTranslations(lang);

  const daysDifference = differenceInDays(endDate, startDate);
  const hoursDifference = differenceInHours(endDate, startDate) % 24;
  const minutesDifference = differenceInMinutes(endDate, startDate) % 60;

  let result = "";

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
}
