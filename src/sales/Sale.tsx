import { ReactNode, useContext, useEffect, useState } from "react";
import { GameContext } from "../games/GameContext";
import { Poster } from "./Poster";
import "./Sale.css";
import { useTrialCount } from "./useTrialCount";

export function Sale({ children }: Props) {
  const [active, setActive] = useState(false);

  const trialCount = useTrialCount();

  const { oldWords } = useContext(GameContext);
  useEffect(() => {
    if (
      (trialCount >= 6 && oldWords.length >= 3) ||
      (trialCount >= 4 &&
        (oldWords.length === 10 ||
          oldWords.length === 15 ||
          oldWords.length === 18 ||
          oldWords.length >= 20))
    ) {
      setActive(true);
    }
  }, [oldWords, trialCount]);

  return (
    <div className={`sales-Sale ${active ? "active" : ""}`}>
      <div className="content">{children}</div>

      <Poster
        active={active}
        setActive={setActive}
        closeable={trialCount < 10 && oldWords.length < 25}
      />
    </div>
  );
}

interface Props {
  children: ReactNode;
}
