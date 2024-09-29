import { createContext, Dispatch, SetStateAction } from "react";
import { Word } from "../words/word";

export const GameContext = createContext<{
  currentWord: Word;
  setCurrentWord: Dispatch<SetStateAction<Word>>;

  currentShown: boolean;
  setCurrentShown: Dispatch<SetStateAction<boolean>>;

  allWords: Word[];
  setAllWords: Dispatch<SetStateAction<Word[]>>;

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

  allWords: [] as Word[],
  setAllWords: () => {},

  oldWords: [] as Word[],
  setOldWords: () => {},
});
