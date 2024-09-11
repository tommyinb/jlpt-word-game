import { useContext } from "react";
import "./Form.css";
import { Hint } from "./Hint";
import { SettingContext } from "./SettingContext";

export function Form() {
  const { active } = useContext(SettingContext);

  return (
    <div className={`settings-Form ${active ? "active" : ""}`}>
      <div className="inner">
        <div className="content">
          <Hint />
        </div>
      </div>
    </div>
  );
}
