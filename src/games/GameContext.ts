import { createContext, Dispatch, SetStateAction } from "react";
import { Word } from "./word";

export const GameContext = createContext<{
  currentWord: Word;
  setCurrentWord: Dispatch<SetStateAction<Word>>;

  currentActive: boolean;
  setCurrentActive: Dispatch<SetStateAction<boolean>>;

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

  currentActive: false,
  setCurrentActive: () => {},

  nextWords: [] as Word[],
  setNextWords: () => {},

  oldWords: [] as Word[],
  setOldWords: () => {},
});
