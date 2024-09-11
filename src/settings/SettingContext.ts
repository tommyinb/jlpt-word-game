import { createContext } from "react";

export const SettingContext = createContext<{
  active: boolean;
  setActive: (active: boolean) => void;

  hintKanji: boolean;
  setHintKanji: (hintKanji: boolean) => void;
  hintHiragana: boolean;
  setHintHiragana: (hintHiragana: boolean) => void;
  hintMeaning: boolean;
  setHintMeaning: (hintMeaning: boolean) => void;

  randomOrder: boolean;
  setRandomOrder: (randomOrder: boolean) => void;
}>({
  active: false,
  setActive: () => {},

  hintKanji: true,
  setHintKanji: () => {},
  hintHiragana: false,
  setHintHiragana: () => {},
  hintMeaning: true,
  setHintMeaning: () => {},

  randomOrder: true,
  setRandomOrder: () => {},
});
