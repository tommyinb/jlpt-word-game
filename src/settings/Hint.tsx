import { useContext } from "react";
import { Checkbox } from "./Checkbox";
import "./Hint.css";
import { SettingContext } from "./SettingContext";

export function Hint() {
  const {
    hintKanji,
    setHintKanji,
    hintHiragana,
    setHintHiragana,
    hintMeaning,
    setHintMeaning,
  } = useContext(SettingContext);

  return (
    <div className="settings-Hint">
      <div className="label">ヒント</div>

      <Checkbox checked={hintKanji} setChecked={setHintKanji}>
        漢字
      </Checkbox>

      <Checkbox checked={hintHiragana} setChecked={setHintHiragana}>
        ひらがな
      </Checkbox>

      <Checkbox checked={hintMeaning} setChecked={setHintMeaning}>
        意味
      </Checkbox>
    </div>
  );
}
