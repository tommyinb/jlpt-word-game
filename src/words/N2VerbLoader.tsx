import { useEffect } from "react";
import { WordLevel } from "../settings/wordLevel";
import { WordType } from "../settings/wordType";
import words from "./n2-verbs.json" assert { type: "json" };
import { Word } from "./word";

export default function N2VerbLoader({ addWords }: Props) {
  useEffect(() => addWords(WordLevel.N2, WordType.Verb, words), [addWords]);

  return <></>;
}

interface Props {
  addWords: (level: WordLevel, type: WordType, words: Word[]) => void;
}
