import { useContext } from "react";
import "./Button.css";
import { SettingContext } from "./SettingContext";

export function Button() {
  const { active, setActive } = useContext(SettingContext);

  return (
    <div
      className={`settings-Button ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      設定
    </div>
  );
}
