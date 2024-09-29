import {
  lazy,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { compareWord } from "../controls/compareWord";
import { GameContext } from "../games/GameContext";
import { SettingContext } from "../settings/SettingContext";
import { WordLevel } from "../settings/wordLevel";
import { WordType } from "../settings/wordType";
import { Word } from "./word";

const N1NounLoader = lazy(() => import("./N1NounLoader"));
const N1VerbLoader = lazy(() => import("./N1VerbLoader"));

const N2AdjectiveLoader = lazy(() => import("./N2AdjectiveLoader"));
const N2NounLoader = lazy(() => import("./N2NounLoader"));
const N2AdverbLoader = lazy(() => import("./N2AdverbLoader"));
const N2VerbLoader = lazy(() => import("./N2VerbLoader"));

const N5AdjectiveLoader = lazy(() => import("./N5AdjectiveLoader"));
const N5AdverbLoader = lazy(() => import("./N5AdverbLoader"));
const N5NounLoader = lazy(() => import("./N5NounLoader"));
const N5VerbLoader = lazy(() => import("./N5VerbLoader"));

export function WordsLoader() {
  const { words } = useContext(SettingContext);
  const active = useCallback(
    (level: WordLevel, type: WordType) =>
      !!words.find((word) => word.level === level && word.type === type),
    [words]
  );

  const [batches, setBatches] = useState<Batch[]>([]);
  const addWords = useCallback(
    (level: WordLevel, type: WordType, words: Word[]) =>
      setBatches((results) => {
        const oldResult = results.find(
          (result) => result.level === level && result.type === type
        );

        return oldResult ? results : [...results, { level, type, words }];
      }),
    []
  );

  const { setAllWords } = useContext(GameContext);
  useEffect(
    () =>
      setAllWords(
        batches
          .filter((batch) =>
            words.some(
              (word) => word.level === batch.level && word.type === batch.type
            )
          )
          .flatMap((batch) => batch.words)
          .sort(compareWord)
      ),
    [batches, setAllWords, words]
  );

  return (
    <Suspense>
      {active(WordLevel.N1, WordType.Noun) && (
        <N1NounLoader addWords={addWords} />
      )}
      {active(WordLevel.N1, WordType.Verb) && (
        <N1VerbLoader addWords={addWords} />
      )}

      {active(WordLevel.N2, WordType.Adjective) && (
        <N2AdjectiveLoader addWords={addWords} />
      )}
      {active(WordLevel.N2, WordType.Adverb) && (
        <N2AdverbLoader addWords={addWords} />
      )}
      {active(WordLevel.N2, WordType.Noun) && (
        <N2NounLoader addWords={addWords} />
      )}
      {active(WordLevel.N2, WordType.Verb) && (
        <N2VerbLoader addWords={addWords} />
      )}

      {active(WordLevel.N5, WordType.Adjective) && (
        <N5AdjectiveLoader addWords={addWords} />
      )}
      {active(WordLevel.N5, WordType.Adverb) && (
        <N5AdverbLoader addWords={addWords} />
      )}
      {active(WordLevel.N5, WordType.Noun) && (
        <N5NounLoader addWords={addWords} />
      )}
      {active(WordLevel.N5, WordType.Verb) && (
        <N5VerbLoader addWords={addWords} />
      )}
    </Suspense>
  );
}

interface Batch {
  level: WordLevel;
  type: WordType;

  words: Word[];
}
