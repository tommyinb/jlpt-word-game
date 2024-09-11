import { useContext } from "react";
import { SettingContext } from "../settings/SettingContext";
import "./Card.css";

export function Card({
  value,
  active: cardActive,
  setActive: setCardActive,
}: Props) {
  const {
    active: settingActive,
    setActive: setSettingActive,
    hintHiragana,
  } = useContext(SettingContext);

  return (
    <div
      className={`desks-Card ${cardActive || hintHiragana ? "active" : ""}`}
      onClick={() => {
        if (!cardActive && !hintHiragana) {
          setCardActive(true);

          if (settingActive) {
            setSettingActive(false);
          }
        }
      }}
    >
      <div className="cover" />
      <div className="content">{value}</div>
    </div>
  );
}

interface Props {
  value: string;

  active: boolean;
  setActive: (active: boolean) => void;
}
