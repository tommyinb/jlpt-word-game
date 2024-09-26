import { useContext } from "react";
import { Checkbox } from "./Checkbox";
import "./FormWord.css";
import { SettingContext } from "./SettingContext";

export function FormWord() {
  const {
    n2Adjective,
    setN2Adjective,
    n2Adverb,
    setN2Adverb,
    n2Verb,
    setN2Verb,
    n5Adjective,
    setN5Adjective,
    n5Adverb,
    setN5Adverb,
    n5Noun,
    setN5Noun,
    n5Verb,
    setN5Verb,
  } = useContext(SettingContext);

  return (
    <div className="settings-FormWord">
      <div className="label">レベル</div>

      <div className="content">
        <Checkbox checked={n2Adjective} setChecked={setN2Adjective}>
          N2 形容詞
        </Checkbox>
        <Checkbox checked={n2Adverb} setChecked={setN2Adverb}>
          N2 副詞
        </Checkbox>
        <Checkbox checked={n2Verb} setChecked={setN2Verb}>
          N2 動詞
        </Checkbox>

        <Checkbox checked={n5Adjective} setChecked={setN5Adjective}>
          N5 形容詞
        </Checkbox>
        <Checkbox checked={n5Adverb} setChecked={setN5Adverb}>
          N5 副詞
        </Checkbox>
        <Checkbox checked={n5Noun} setChecked={setN5Noun}>
          N5 名詞
        </Checkbox>
        <Checkbox checked={n5Verb} setChecked={setN5Verb}>
          N5 動詞
        </Checkbox>
      </div>
    </div>
  );
}
