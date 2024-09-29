import { useEffect } from "react";
import { WordLevel } from "../settings/wordLevel";
import { WordType } from "../settings/wordType";
import words from "./n5-nouns.json" assert { type: "json" };
import { Word } from "./word";

export default function N5NounLoader({ addWords }: Props) {
  useEffect(() => addWords(WordLevel.N5, WordType.Noun, words), [addWords]);

  return <></>;
}

interface Props {
  addWords: (level: WordLevel, type: WordType, words: Word[]) => void;
}
