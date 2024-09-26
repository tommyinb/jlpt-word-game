import { createContext } from "react";
import { Hint } from "./hint";

export const SettingContext = createContext<{
  active: boolean;
  setActive: (active: boolean) => void;

  hints: Hint[];
  saveHints: (hints: Hint[]) => void;

  randomOrder: boolean;
  setRandomOrder: (randomOrder: boolean) => void;

  n2Adjective: boolean;
  setN2Adjective: (n2Adjective: boolean) => void;
  n2Adverb: boolean;
  setN2Adverb: (n2Adverb: boolean) => void;
  n2Verb: boolean;
  setN2Verb: (n2Verb: boolean) => void;
  n5Adjective: boolean;
  setN5Adjective: (n5Adjective: boolean) => void;
  n5Adverb: boolean;
  setN5Adverb: (n5Adverb: boolean) => void;
  n5Noun: boolean;
  setN5Noun: (n5Noun: boolean) => void;
  n5Verb: boolean;
  setN5Verb: (n5Verb: boolean) => void;
}>({
  active: false,
  setActive: () => {},

  hints: [],
  saveHints: () => {},

  randomOrder: true,
  setRandomOrder: () => {},

  n2Adjective: true,
  setN2Adjective: () => {},
  n2Adverb: true,
  setN2Adverb: () => {},
  n2Verb: true,
  setN2Verb: () => {},
  n5Adjective: true,
  setN5Adjective: () => {},
  n5Adverb: true,
  setN5Adverb: () => {},
  n5Noun: true,
  setN5Noun: () => {},
  n5Verb: true,
  setN5Verb: () => {},
});
