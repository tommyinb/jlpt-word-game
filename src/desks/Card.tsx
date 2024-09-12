import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import { SettingContext } from "../settings/SettingContext";
import "./Card.css";

export function Card({
  value,
  active: cardActive,
  setActive: setCardActive,
}: Props) {
  const { currentShown } = useContext(GameContext);

  const {
    active: settingActive,
    setActive: setSettingActive,
    hintHiragana,
  } = useContext(SettingContext);

  const outputActive = cardActive || currentShown || hintHiragana;

  return (
    <div
      className={`desks-Card ${outputActive ? "active" : ""}`}
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

      <div className="content">{outputActive && value}</div>
    </div>
  );
}

interface Props {
  value: string;

  active: boolean;
  setActive: (active: boolean) => void;
}
