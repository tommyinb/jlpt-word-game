import { WordLevel } from "../settings/wordLevel";
import { WordType } from "../settings/wordType";
import { Word } from "./word";

export interface File {
  level: WordLevel;
  type: WordType;

  words: Word[];
}
