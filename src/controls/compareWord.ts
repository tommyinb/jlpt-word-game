import { Word } from "../games/word";

export function compareWord(leftWord: Word, rightWord: Word) {
  const leftHiragana = leftWord.hiragana ?? leftWord.japanese;
  const rightHiragana = rightWord.hiragana ?? rightWord.japanese;

  const compareLength = Math.min(leftHiragana.length, rightHiragana.length);
  for (let i = 0; i < compareLength; i++) {
    const letterCompare = compareLetter(leftHiragana[i], rightHiragana[i]);

    if (letterCompare) {
      return letterCompare;
    }
  }

  return Math.sign(leftHiragana.length - rightHiragana.length);
}

function compareLetter(leftLetter: string, rightLetter: string) {
  const letters =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

  const leftIndex = letters.indexOf(leftLetter);
  const rightIndex = letters.indexOf(rightLetter);

  return Math.sign(leftIndex - rightIndex);
}
