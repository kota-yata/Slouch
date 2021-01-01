<script lang="ts" context="module">
  // このコンポーネントにトリガーは存在せず、単体では何もできない
  // しかし別コンポーネントでこのコンポーネントのDOMを読み込むのも嫌なのでモジュールとしてexportする
  import marked from "marked";
  import hljs from "highlight.js";
  import DOMPurify from "dompurify";
  import { isArray, isObject } from "../jsTypeCheck/typecheck";

  // getDOMの命令文字列でobjectが指定された場合の型
  interface centerNotesObj {
    mainNote: HTMLElement;
    previewNote: HTMLElement;
  }
  // インデックスが必要ない場合は読みやすいオブジェクトで返すために命令文字列を定める
  type allowedInstructionForGetDom = "array" | "object";
  // 命令文字列に基づいた配列とオブジェクト、エラーのundefinedもあり得る
  type allowedReturnForGetDom = centerNotesObj | HTMLElement[] | undefined;

  // プレビューとエディターのDOMを取得し、引数の命令文字列で指定された型で返す
  const getDOM = (instraction: allowedInstructionForGetDom): allowedReturnForGetDom => {
    const mainNote: HTMLElement | null = document.getElementById("main_note");
    if (!mainNote) throw "mainNote is null";
    const previewNote: HTMLElement | null = document.getElementById("preview_note");
    if (!previewNote) throw "previewNote is null";

    // parseElement()ではインデックスを使う必要はない
    // その場合、key名で指定した方が可読性が上がるのでkey名===valueのオブジェクトを用意する
    const returnedObject: centerNotesObj = { mainNote: mainNote, previewNote: previewNote };
    // changeAppearance()でインデックスを用いた判定を行うため、二つのDOMを配列に入れる
    const returnedArray: HTMLElement[] = [mainNote, previewNote];

    // 命令文字列にしたがった型で返す
    if (instraction === "object") return returnedObject;
    if (instraction === "array") return returnedArray;
  };

  // marked.jsとDOMPurifyでmarkdownパース
  // プレビューとエディターのDOMを引数でもらうことなく関数の中で取得することで、parseElement()が使われる場所で別コンポーネントのDOMを読み込む必要がなくなる
  export const parseElement = (): void => {
    // 本来anyではなくallowedReturnForGetDomだが、undefinedとHTMLElement[]を弾いても型エラーが消えなかったのでひとまずanyで回避中
    // エラーの再現はanyをallowedReturnForGetDomにすればできる
    const DOMObj: any = getDOM("object");
    // このエラーハンドリングで実質的に型チェックは完了する
    if (!isObject(DOMObj)) throw "DOMObj in parseElement() must be an object (a.k.a associative array)";
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

  // 配列のインデックスのみを引数でもらう
  // 配列のインデックス位置を覚える確認する必要があるが、いちいちクリックされてない方のDOMを渡すのは嫌
  // 加えてparseElement()同様、このコンポーネントのDOMを別コンポーネントから取得する必要もなくなる
  type allowedInstructionNumForChangeAppearance = 0 | 1;
  // プレビュー画面とエディター画面でクリックされた方のDOMのz-indexを高くする
  export const changeAppearance = (clickedNum: allowedInstructionNumForChangeAppearance): void => {
    const DOMObj: any = getDOM("array");
    if (!isArray(DOMObj)) throw "DOMObj in changeAppearance() must ve an array";
    const clickedElement: HTMLElement = DOMObj[clickedNum];
    // クリックされたボタンの配列インデックスが1だった場合、他方のボタンは 1 - 1 = 0 になる
    // 逆にクリックされたのが0だった場合、他方は 1 - 0 = 1 になる
    // なので 1 - クリックされたボタンのインデックス で他方のボタンを判定できる
    const anotherElement: HTMLElement = DOMObj[1 - clickedNum];

    // クリックされた方のz-indexを3に、そうでない方を2にする
    clickedElement.style.zIndex = "3";
    anotherElement.style.zIndex = "2";
  };
</script>

<textarea class="main-note center-content" id="main_note"></textarea>
<div class="preview-note center-content" id="preview_note"></div>

<style lang="scss">
  @import "../assets/definition.scss";

  .center-content {
    width: $center-note-width;
    height: $center-note-height;
    position: absolute;
    top: calc(
      50% - #{$center-note-height} / 2 - #{$center-note-padding}
    ); // ページの高さ/2 - カードの高さ/2 - paddingで上下センタリングされる
    left: calc(
      50% - #{$center-note-width} / 2 - #{$center-note-padding}
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

  @media (max-aspect-ratio: 1/1) {
    $mobile-padding: 2vh;
    $mobile-width: calc(80vw - #{$mobile-padding}* 2);
    $mobile-height: calc(80vw / #{$A4RATIO} - #{$mobile-padding}* 2);
    .center-content {
      top: 0;
      left: calc(50% - 80vw / 2);
      width: $mobile-width;
      max-height: calc(100vh - 76px - 25vh - #{$mobile-padding}* 2);
      min-height: $mobile-height;
      padding: $mobile-padding;
    }
  }
</style>
