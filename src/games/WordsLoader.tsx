import {
  Dispatch,
  lazy,
  SetStateAction,
  Suspense,
  useCallback,
  useContext,
} from "react";
import { SettingContext } from "../settings/SettingContext";
import { WordLevel } from "../settings/wordLevel";
import { WordType } from "../settings/wordType";
import { File } from "../words/file";

const N2AdjectiveLoader = lazy(() => import("../words/N2AdjectiveLoader"));
const N2AdverbLoader = lazy(() => import("../words/N2AdverbLoader"));
const N2VerbLoader = lazy(() => import("../words/N2VerbLoader"));

const N5AdjectiveLoader = lazy(() => import("../words/N5AdjectiveLoader"));
const N5AdverbLoader = lazy(() => import("../words/N5AdverbLoader"));
const N5NounLoader = lazy(() => import("../words/N5NounLoader"));
const N5VerbLoader = lazy(() => import("../words/N5VerbLoader"));

export function WordsLoader({ setFiles }: Props) {
  const { words } = useContext(SettingContext);

  const active = useCallback(
    (level: WordLevel, type: WordType) =>
      !!words.find((word) => word.level === level && word.type === type),
    [words]
  );

  return (
    <Suspense>
      {active(WordLevel.N2, WordType.Adjective) && (
        <N2AdjectiveLoader setFiles={setFiles} />
      )}
      {active(WordLevel.N2, WordType.Adverb) && (
        <N2AdverbLoader setFiles={setFiles} />
      )}
      {active(WordLevel.N2, WordType.Verb) && (
        <N2VerbLoader setFiles={setFiles} />
      )}

      {active(WordLevel.N5, WordType.Adjective) && (
        <N5AdjectiveLoader setFiles={setFiles} />
      )}
      {active(WordLevel.N5, WordType.Adverb) && (
        <N5AdverbLoader setFiles={setFiles} />
      )}
      {active(WordLevel.N5, WordType.Noun) && (
        <N5NounLoader setFiles={setFiles} />
      )}
      {active(WordLevel.N5, WordType.Verb) && (
        <N5VerbLoader setFiles={setFiles} />
      )}
    </Suspense>
  );
}

interface Props {
  setFiles: Dispatch<SetStateAction<File[]>>;
}
