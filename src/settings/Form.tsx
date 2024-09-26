import { useContext } from "react";
import "./Form.css";
import { FormHint } from "./FormHint";
import { FormOrder } from "./FormOrder";
import { FormWord } from "./FormWord";
import { SettingContext } from "./SettingContext";

export function Form() {
  const { active } = useContext(SettingContext);

  return (
    <div className={`settings-Form ${active ? "active" : ""}`}>
      <div className="inner">
        <div className="content">
          <FormHint />

          <FormOrder />

          <FormWord />
        </div>
      </div>
    </div>
  );
}
