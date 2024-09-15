import { useMemo } from "react";

export function useTargeted() {
  return useMemo(() => {
    try {
      const allLanguages = navigator.languages
        .map((language) => /^\w+/.exec(language))
        .filter((match) => match)
        .map((match) => match![0]);

      const uniqueLanguages = allLanguages.filter(
        (language, index, array) => array.indexOf(language) === index
      );

      const mainLanguages = uniqueLanguages.slice(0, 3);

      return mainLanguages.some((language) => language.startsWith("ko"));
    } catch {
      return false;
    }
  }, []);
}
