<script lang="ts" context="module">
  import marked from "marked";
  import hljs from "highlight.js";
  import DOMPurify from "dompurify";

  type allowedInstructionNumForChangeAppearance = 0 | 1;

  export class ParsingMD {
    static typeArray: HTMLElement[];
    static mainNote: HTMLInputElement;
    static previewNote: HTMLElement;

    static getNoteDom() {
      const mainNote: HTMLInputElement | null = document.getElementById("main_note") as HTMLInputElement;
      if (!mainNote) throw new Error("mainNote is null");
      this.mainNote = mainNote;
      const previewNote: HTMLElement | null = document.getElementById("preview_note");
      if (!previewNote) throw new Error("previewNote is null");
      this.previewNote = previewNote;

      const returnedArray: HTMLElement[] = [mainNote, previewNote];
      this.typeArray = returnedArray;
    }

    static parseElement() {
      marked.setOptions({
        langPrefix: "",
        highlight: (code: string, language: any) => {
          const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
          return hljs.highlight(validLanguage, code).value;
        },
        gfm: true,
        breaks: true,
        mangle: true,
      });
      const originalText: string = this.mainNote.value;
      const unsanitizedDirtyElement: string = marked(originalText);
      const sanitizedElement: string = DOMPurify.sanitize(unsanitizedDirtyElement);
      this.previewNote.innerHTML = sanitizedElement;
    }

    static changeAppearance(clickedNum: allowedInstructionNumForChangeAppearance) {
      const clickedElement: HTMLElement = this.typeArray[clickedNum];
      // クリックされたボタンの配列インデックスが1だった場合、他方のボタンは 1 - 1 = 0 になる
      // 逆にクリックされたのが0だった場合、他方は 1 - 0 = 1 になる
      // なので 1 - クリックされたボタンのインデックス で他方のボタンを判定できる
      const anotherElement: HTMLElement = this.typeArray[1 - clickedNum];

      // クリックされた方のz-indexを3に、そうでない方を2にする
      clickedElement.style.zIndex = "3";
      anotherElement.style.zIndex = "2";
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    ParsingMD.getNoteDom();
  });
</script>

<textarea class="main-note center-content syncscroll" name="sameScroll" id="main_note"></textarea>
<div class="preview-note center-content syncscroll" name="sameScroll" id="preview_note"></div>

<style lang="scss">
  @import "../assets/definition.scss";
  $mobile-padding: 2vh;
  $mobile-width: calc(90vw - #{$mobile-padding}* 2);
  $mobile-height: calc(100% - #{$mobile-padding}* 2);

  .center-content {
    width: $center-note-width;
    max-width: 55vw;
    height: $center-note-height;
    position: absolute;
    top: calc(
      50% - #{$center-note-height} / 2 - #{$center-note-padding}
    ); // ページの高さ/2 - カードの高さ/2 - paddingで上下センタリングされる
    left: calc(
      50% - #{$center-note-width} / 2 - #{$center-note-padding}
    ); // A4サイズ(1:1.414)に横幅を合わせ、ページの横幅/2 - テキストエリアの横幅/2 - paddingで左右センタリングする
    background: $complete-white;
    font-family: "inter", "nsjp", arial, sans-serif;
    font-weight: 400;
    font-size: 15px;
    resize: none;
    padding: $center-note-padding;
    word-wrap: break-word;
    white-space: normal;
    overflow-y: scroll;
    line-height: 1.8;
  }
  .main-note {
    z-index: 3;
  }
  .preview-note {
    z-index: 2;
    line-height: 1.9;
  }

  @media (max-aspect-ratio: 1/1) {
    .center-content {
      top: 0;
      left: calc(50% - 90vw / 2);
      width: $mobile-width;
      max-width: $mobile-width;
      height: $mobile-height;
      max-height: calc(100vh - 96px - 25vh - #{$mobile-padding}* 2);
      padding: $mobile-padding;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 700px) and (max-aspect-ratio: 4/7) {
    .center-content {
      height: calc(100vh - 96px - 25vh - #{$mobile-padding}* 2 - 4vh);
      min-height: $mobile-height;
    }
  }
</style>
