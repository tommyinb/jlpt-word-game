import { Dispatch, lazy, SetStateAction, Suspense, useContext } from "react";
import { SettingContext } from "../settings/SettingContext";
import { File } from "../words/file";

const N2AdjectiveLoader = lazy(() => import("../words/N2AdjectiveLoader"));
const N2AdverbLoader = lazy(() => import("../words/N2AdverbLoader"));
const N2VerbLoader = lazy(() => import("../words/N2VerbLoader"));

const N5AdjectiveLoader = lazy(() => import("../words/N5AdjectiveLoader"));
const N5AdverbLoader = lazy(() => import("../words/N5AdverbLoader"));
const N5NounLoader = lazy(() => import("../words/N5NounLoader"));
const N5VerbLoader = lazy(() => import("../words/N5VerbLoader"));

export function WordsLoader({ setFiles }: Props) {
  const {
    n2Adjective,
    n2Adverb,
    n2Verb,
    n5Adjective,
    n5Adverb,
    n5Noun,
    n5Verb,
  } = useContext(SettingContext);

  return (
    <Suspense>
      {n2Adjective && <N2AdjectiveLoader setFiles={setFiles} />}
      {n2Adverb && <N2AdverbLoader setFiles={setFiles} />}
      {n2Verb && <N2VerbLoader setFiles={setFiles} />}

      {n5Adjective && <N5AdjectiveLoader setFiles={setFiles} />}
      {n5Adverb && <N5AdverbLoader setFiles={setFiles} />}
      {n5Noun && <N5NounLoader setFiles={setFiles} />}
      {n5Verb && <N5VerbLoader setFiles={setFiles} />}
    </Suspense>
  );
}

interface Props {
  setFiles: Dispatch<SetStateAction<File[]>>;
}
