import { createContext, Dispatch, SetStateAction } from "react";
import { Word } from "./word";

export const GameContext = createContext<{
  currentWord: Word;
  setCurrentWord: Dispatch<SetStateAction<Word>>;

  currentShown: boolean;
  setCurrentShown: Dispatch<SetStateAction<boolean>>;

  nextWords: Word[];
  setNextWords: Dispatch<SetStateAction<Word[]>>;

  oldWords: Word[];
  setOldWords: Dispatch<SetStateAction<Word[]>>;
}>({
  currentWord: {
    hiragana: "あいする",
    japanese: "愛する",
    chinese: "我愛你",
  },
  setCurrentWord: () => {},

  currentShown: false,
  setCurrentShown: () => {},

  nextWords: [] as Word[],
  setNextWords: () => {},

  oldWords: [] as Word[],
  setOldWords: () => {},
});
