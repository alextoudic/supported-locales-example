type LocalizedContent = {
  change: string;
  flag: string;
  language: string;
  name: string;
};

export const useLocalizedContent = (locale: string | null): LocalizedContent => {
  switch (locale) {
    case "fr":
      return require("./fr.json");
    case "es":
      return require("./es.json");
    default:
    case "en":
      return require("./en.json");
  }
};
