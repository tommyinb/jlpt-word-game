import { useCallback, useContext } from "react";
import { Checkbox } from "./Checkbox";
import "./FormWord.css";
import { SettingContext } from "./SettingContext";
import { WordLevel } from "./wordLevel";
import { WordType } from "./wordType";

export function FormWord() {
  const { words, saveWords } = useContext(SettingContext);

  const active = useCallback(
    (level: WordLevel, type: WordType) =>
      !!words.find((word) => word.level === level && word.type === type),
    [words]
  );

  const setActive = useCallback(
    (level: WordLevel, type: WordType, active: boolean) =>
      active
        ? saveWords([...words, { level, type }])
        : saveWords(
            words.filter((word) => word.level !== level || word.type !== type)
          ),
    [saveWords, words]
  );

  return (
    <div className="settings-FormWord">
      <div className="label">レベル</div>

      <div className="content">
        <Checkbox
          checked={active(WordLevel.N1, WordType.Noun)}
          setChecked={(value) => setActive(WordLevel.N1, WordType.Noun, value)}
        >
          N1 名詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N1, WordType.Verb)}
          setChecked={(value) => setActive(WordLevel.N1, WordType.Verb, value)}
        >
          N1 動詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N2, WordType.Adjective)}
          setChecked={(value) =>
            setActive(WordLevel.N2, WordType.Adjective, value)
          }
        >
          N2 形容詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N2, WordType.Adverb)}
          setChecked={(value) =>
            setActive(WordLevel.N2, WordType.Adverb, value)
          }
        >
          N2 副詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N2, WordType.Noun)}
          setChecked={(value) => setActive(WordLevel.N2, WordType.Noun, value)}
        >
          N2 名詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N2, WordType.Verb)}
          setChecked={(value) => setActive(WordLevel.N2, WordType.Verb, value)}
        >
          N2 動詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N5, WordType.Adjective)}
          setChecked={(value) =>
            setActive(WordLevel.N5, WordType.Adjective, value)
          }
        >
          N5 形容詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N5, WordType.Adverb)}
          setChecked={(value) =>
            setActive(WordLevel.N5, WordType.Adverb, value)
          }
        >
          N5 副詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N5, WordType.Noun)}
          setChecked={(value) => setActive(WordLevel.N5, WordType.Noun, value)}
        >
          N5 名詞
        </Checkbox>

        <Checkbox
          checked={active(WordLevel.N5, WordType.Verb)}
          setChecked={(value) => setActive(WordLevel.N5, WordType.Verb, value)}
        >
          N5 動詞
        </Checkbox>
      </div>
    </div>
  );
}
