import { useContext, useEffect, useMemo, useState } from "react";
import { GameContext } from "../games/GameContext";
import { Card } from "./Card";
import "./Hiragana.css";

export function Hiragana({ className }: Props) {
  const { currentWord, setCurrentShown } = useContext(GameContext);

  const letters = useMemo(
    () => [...(currentWord.hiragana ?? currentWord.japanese)],
    [currentWord]
  );

  const [actives, setActives] = useState<boolean[]>([]);

  useEffect(() => setActives(letters.map(() => false)), [letters]);

  const setLetterActives = useMemo(
    () =>
      letters.map((_letter, index) => (active: boolean) => {
        const newActives = [...actives];
        newActives[index] = active;

        setActives(newActives);

        if (newActives.every((active) => active)) {
          setCurrentShown(true);
        }
      }),
    [actives, letters, setCurrentShown]
  );

  return (
    <div className={`desks-Hiragana ${className}`}>
      {letters.map((letter, index) => (
        <Card
          key={index}
          value={letter}
          active={actives[index]}
          setActive={setLetterActives[index]}
        />
      ))}
    </div>
  );
}

interface Props {
  className: string;
}
