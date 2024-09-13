import { Word } from "../words/word";
import "./Line.css";

export function Line({ word }: Props) {
  return (
    <div className="histories-Line">
      <div className="content">
        <div className="japanese">{word.japanese}</div>
        <div className="hiragana">{word.hiragana ?? word.japanese}</div>
        <div className="chinese">{word.chinese}</div>
      </div>
    </div>
  );
}

interface Props {
  word: Word;
}
