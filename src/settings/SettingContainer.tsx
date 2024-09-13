import { ReactNode, useCallback, useMemo, useState } from "react";
import { SettingContext } from "./SettingContext";
import { useStorageValue } from "./useStorageValue";

export function SettingContainer({ children }: Props) {
  const [active, setActive] = useState(false);

  const { value, saveValue } = useStorageValue();

  const setHintKanji = useCallback(
    (hintKanji: boolean) => saveValue({ ...value, hintKanji }),
    [saveValue, value]
  );
  const setHintHiragana = useCallback(
    (hintHiragana: boolean) => saveValue({ ...value, hintHiragana }),
    [saveValue, value]
  );
  const setHintMeaning = useCallback(
    (hintMeaning: boolean) => saveValue({ ...value, hintMeaning }),
    [saveValue, value]
  );

  const setRandomOrder = useCallback(
    (randomOrder: boolean) => saveValue({ ...value, randomOrder }),
    [saveValue, value]
  );

  const setN2Adjective = useCallback(
    (n2Adjective: boolean) => saveValue({ ...value, n2Adjective }),
    [saveValue, value]
  );
  const setN2Adverb = useCallback(
    (n2Adverb: boolean) => saveValue({ ...value, n2Adverb }),
    [saveValue, value]
  );
  const setN2Verb = useCallback(
    (n2Verb: boolean) => saveValue({ ...value, n2Verb }),
    [saveValue, value]
  );

  const setN5Adjective = useCallback(
    (n5Adjective: boolean) => saveValue({ ...value, n5Adjective }),
    [saveValue, value]
  );
  const setN5Adverb = useCallback(
    (n5Adverb: boolean) => saveValue({ ...value, n5Adverb }),
    [saveValue, value]
  );
  const setN5Noun = useCallback(
    (n5Noun: boolean) => saveValue({ ...value, n5Noun }),
    [saveValue, value]
  );
  const setN5Verb = useCallback(
    (n5Verb: boolean) => saveValue({ ...value, n5Verb }),
    [saveValue, value]
  );

  return (
    <SettingContext.Provider
      value={useMemo(
        () => ({
          active,
          setActive,
          hintKanji: value.hintKanji,
          setHintKanji,
          hintHiragana: value.hintHiragana,
          setHintHiragana,
          hintMeaning: value.hintMeaning,
          setHintMeaning,
          randomOrder: value.randomOrder,
          setRandomOrder,
          n2Adjective: value.n2Adjective,
          setN2Adjective,
          n2Adverb: value.n2Adverb,
          setN2Adverb,
          n2Verb: value.n2Verb,
          setN2Verb,
          n5Adjective: value.n5Adjective,
          setN5Adjective,
          n5Adverb: value.n5Adverb,
          setN5Adverb,
          n5Noun: value.n5Noun,
          setN5Noun,
          n5Verb: value.n5Verb,
          setN5Verb,
        }),
        [
          active,
          setHintHiragana,
          setHintKanji,
          setHintMeaning,
          setN2Adjective,
          setN2Adverb,
          setN2Verb,
          setN5Adjective,
          setN5Adverb,
          setN5Noun,
          setN5Verb,
          setRandomOrder,
          value.hintHiragana,
          value.hintKanji,
          value.hintMeaning,
          value.n2Adjective,
          value.n2Adverb,
          value.n2Verb,
          value.n5Adjective,
          value.n5Adverb,
          value.n5Noun,
          value.n5Verb,
          value.randomOrder,
        ]
      )}
    >
      {children}
    </SettingContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
