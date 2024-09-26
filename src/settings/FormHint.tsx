import { useContext } from "react";
import { Checkbox } from "./Checkbox";
import "./FormHint.css";
import { SettingContext } from "./SettingContext";
import { Hint } from "./hint";

export function FormHint() {
  const { hints, saveHints } = useContext(SettingContext);

  return (
    <div className="settings-FormHint">
      <div className="label">ヒント</div>

      <div className="content">
        <Checkbox
          checked={hints.includes(Hint.Kanji)}
          setChecked={(value) =>
            value
              ? saveHints([...hints, Hint.Kanji])
              : saveHints(hints.filter((hint) => hint !== Hint.Kanji))
          }
        >
          漢字
        </Checkbox>

        <Checkbox
          checked={hints.includes(Hint.Hiragana)}
          setChecked={(value) =>
            value
              ? saveHints([...hints, Hint.Hiragana])
              : saveHints(hints.filter((hint) => hint !== Hint.Hiragana))
          }
        >
          ひらがな
        </Checkbox>

        <Checkbox
          checked={hints.includes(Hint.Meaning)}
          setChecked={(value) =>
            value
              ? saveHints([...hints, Hint.Meaning])
              : saveHints(hints.filter((hint) => hint !== Hint.Meaning))
          }
        >
          意味
        </Checkbox>
      </div>
    </div>
  );
}
