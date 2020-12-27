<script lang="ts" context="module">
  import marked from "marked";
  import hljs from "highlight.js";
  import DOMPurify from "dompurify";

  interface getDOM {
    mainNote: HTMLElement;
    previewNote: HTMLElement;
  }

  type allowedInstructionForGetDom = "array" | "object";
  type allowedReturnForGetDom = getDOM | HTMLElement[] | undefined;
  const getDOM = (instraction: allowedInstructionForGetDom): allowedReturnForGetDom => {
    const mainNote: HTMLElement | null = document.getElementById("main_note");
    if (!mainNote) throw "mainNote is null";
    const previewNote: HTMLElement | null = document.getElementById("preview_note");
    if (!previewNote) throw "previewNote is null";

    const returnedObject: getDOM = { mainNote: mainNote, previewNote: previewNote };
    const returnedArray: HTMLElement[] = [mainNote, previewNote];

    if (instraction === "object") return returnedObject;
    if (instraction === "array") return returnedArray;
  };

  // marked.jsとDOMPurifyで簡単なmarkdownパース
  export const parseElement = (): void => {
    const DOMObj: any = getDOM("object");
    marked.setOptions({
      langPrefix: "",
      highlight: (code: any, lang: any): string => {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });
    const originalText: string = DOMObj.mainNote.value;
    const unsanitizedDirtyElement: string = marked(originalText);
    const sanitizedElement: string = DOMPurify.sanitize(unsanitizedDirtyElement);
    DOMObj.previewNote.innerHTML = sanitizedElement;
  };

  type allowedInstructionNumForChangeAppearance = 0 | 1;
  export const changeAppearance = (clickedNum: allowedInstructionNumForChangeAppearance): void => {
    const DOMObj: any = getDOM("array");
    const clickedElement: HTMLElement = DOMObj[clickedNum];
    const oppositeElement: HTMLElement = DOMObj[1 - clickedNum];

    clickedElement.style.zIndex = "3";
    oppositeElement.style.zIndex = "2";
  };
</script>

<textarea class="main-note center-content" id="main_note"></textarea>
<div class="preview-note center-content" id="preview_note"></div>

<style lang="scss">
  @import "../assets/definition.scss";

  .center-content {
    width: calc(#{$center-note-height} * #{$A4RATIO});
    height: $center-note-height;
    position: absolute;
    top: calc(
      50% - #{$center-note-height} / 2 - #{$center-note-padding}
    ); // ページの高さ/2 - カードの高さ/2 - paddingで上下センタリングされる
    left: calc(
      50% - #{$center-note-height} * #{$A4RATIO} / 2 - #{$center-note-padding}
    ); // A4サイズ(1:1.414)に横幅を合わせ、ページの横幅/2 - テキストエリアの横幅/2 - paddingで左右センタリングする
    background: $complete-white;
    font-family: "nsjp", sans-serif;
    font-size: 20px;
    resize: none;
    padding: $center-note-padding;
  }
  .main-note {
    z-index: 3;
  }
  .preview-note {
    z-index: 2;
  }
</style>
