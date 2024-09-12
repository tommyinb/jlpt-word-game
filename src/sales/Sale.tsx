import { ReactNode, useContext, useEffect, useState } from "react";
import { GameContext } from "../games/GameContext";
import { Poster } from "./Poster";
import "./Sale.css";

export function Sale({ children }: Props) {
  const [active, setActive] = useState(false);

  const { oldWords } = useContext(GameContext);
  useEffect(() => {
    if (
      oldWords.length === 10 ||
      oldWords.length === 15 ||
      oldWords.length === 18 ||
      oldWords.length >= 20
    ) {
      setActive(true);
    }
  }, [oldWords]);

  return (
    <div className={`sales-Sale ${active ? "active" : ""}`}>
      <div className="content">{children}</div>

      <Poster active={active} setActive={setActive} />
    </div>
  );
}

interface Props {
  children: ReactNode;
}
