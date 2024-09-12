import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./Poster.css";

export function Poster({ active, setActive }: Props) {
  const { oldWords } = useContext(GameContext);

  return (
    <div className={`sales-Poster ${active ? "active" : ""}`}>
      <div className="content">
        <div className="title">無料体験</div>
        <div className="description">終わってしまいました</div>

        <div
          className="button"
          onClick={() => {
            if (oldWords.length < 25) {
              setActive(false);
            }
          }}
        >
          <div className="sale">激安割引</div>
          <div className="price">¥748</div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
}
