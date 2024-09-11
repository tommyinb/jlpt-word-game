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
}>({
  active: false,
  setActive: () => {},

  hintKanji: false,
  setHintKanji: () => {},
  hintHiragana: false,
  setHintHiragana: () => {},
  hintMeaning: false,
  setHintMeaning: () => {},
});
