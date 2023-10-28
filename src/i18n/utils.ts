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

export function mapChallengesToPaths(challenges: any) {
  const englishChallenges = challenges.filter(({ id }) => {
    return id.startsWith("en/");
  });

  const spanishChallenges = challenges.filter(({ id }) => {
    return id.startsWith("es/");
  });

  const contentPathNames = new Map();

  englishChallenges.forEach((item: any) => {
    contentPathNames.set(item.data.id, {
      id: item.data.id,
      en: item.slug,
      es: "",
    });
  });

  spanishChallenges.forEach((item: any) => {
    if (contentPathNames.has(item.data.id)) {
      const existingChallenge = contentPathNames.get(item.data.id);
      existingChallenge.es = item.slug;
    } else {
      contentPathNames.set(item.data.id, {
        id: item.data.id,
        en: "",
        es: item.slug,
      });
    }
  });

  const resultArray = Array.from(contentPathNames.values());
  return resultArray;
}
