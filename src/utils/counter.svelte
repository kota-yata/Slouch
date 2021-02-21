<script lang="ts" context="module">
  export class WordsCounter {
    static charNum: HTMLElement;
    static wordsNum: HTMLElement;
    static mainNote: HTMLElement;

    static getDOM() {
      const charNum = document.getElementById("char_number");
      if (!charNum) throw new Error("charNum doesn't exist");
      const wordsNum = document.getElementById("words_number");
      if (!wordsNum) throw new Error("wordsNum doesn't exist");
      const mainNote = document.getElementById("main_note");
      if (!mainNote) throw new Error("mainNote doesn't exist");

      this.charNum = charNum;
      this.wordsNum = wordsNum;
      this.mainNote = mainNote;
    }
    static counter() {
      countChar(this.charNum, this.mainNote);
      countWords(this.wordsNum, this.mainNote);
    }
  }

  // 文字数を計測する
  const countChar = (charNum: HTMLElement, mainNote: HTMLElement) => {
    let strCount: string | null = mainNote.textContent;
    if (!strCount) return;
    strCount = strCount.replace(/(\n)/g, "");
    charNum.innerText = strCount.length.toString();
    // numContainer.value = wordcount.innerText;
  };

  // 単語数を計測する
  const countWords = (wordsNum: any, mainNote: HTMLElement) => {
    const segmenter = new Intl.Segmenter("ja", { granularity: "word" });
    let strCount: string | null = mainNote.textContent;
    if (!strCount) return;
    strCount = strCount.replace(/(\n)/g, "");
    const segments = segmenter.segment(strCount);
    let wordsCount = 0;
    for (const seg of segments) {
      wordsCount++;
    }
    console.log(wordsCount);
  };
</script>
