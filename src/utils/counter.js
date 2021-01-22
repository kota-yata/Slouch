"use strict";

const getDOM = () => {
  const charNum = document.getElementById("char_number");
  if (!charNum) throw new Error("charNum doesn't exist");
  const wordsNum = document.getElementById("words_number");
  if (!wordsNum) throw new Error("wordsNum doesn't exist");
  const mainNote = document.getElementById("main_note");
  if (!mainNote) throw new Error("mainNote doesn't exist");
  const returnObj = {
    charNum: charNum,
    wordsNum: wordsNum,
    mainNote: mainNote,
  };

  return returnObj;
};

// 文字数を計測する
const countChar = (charNum, mainNote) => {
  let strCount = mainNote.textContent;
  strCount = strCount.replace(/(\n)/g, "");
  charNum.innerText = strCount.length.toString();
  // numContainer.value = wordcount.innerText;
};

// 単語数を計測する
const countWords = (wordsNum, mainNote) => {
  const segmenter = new Intl.Segmenter("ja", { granularity: "word" });
  let strCount = mainNote.textContent;
  strCount = strCount.replace(/(\n)/g, "");
  const segments = segmenter.segment(strCount);
  let wordsCount = 0;
  for (const seg of segments) {
    wordsCount++;
  }
  console.log(wordsCount);
};

export const counter = () => {
  const DOMObj = getDOM();
  countChar(DOMObj.charNum, DOMObj.mainNote);
  countWords(DOMObj.wordsNum, DOMObj.mainNote);
};
