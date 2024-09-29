import { Word } from "../words/word";

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

const orderedLetters =
  "あいうえお" +
  "かきくけこ" +
  "がぎぐげご" +
  "さしすせそ" +
  "ざじずぜぞ" +
  "たちつてと" +
  "だぢづでど" +
  "なにぬねの" +
  "はひふへほ" +
  "ばびぶべぼ" +
  "ぱぴぷぺぽ" +
  "まみむめも" +
  "やゆよ" +
  "らりるれろ" +
  "わをん";

function compareLetter(leftLetter: string, rightLetter: string) {
  const leftIndex = orderedLetters.indexOf(leftLetter);
  const rightIndex = orderedLetters.indexOf(rightLetter);

  return Math.sign(leftIndex - rightIndex);
}
