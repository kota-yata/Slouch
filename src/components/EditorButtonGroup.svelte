<script lang="ts">
  import { parseElement, changeAppearance } from "./CenterNote.svelte";

  window.addEventListener("DOMContentLoaded", (): void => {
    // 初期画面はエディターなのでタイトルもEditorにしておく
    document.title = "SLOUCH - Editor";
    // 二つのボタンを取得してnullだったら返しておく
    const editButton: HTMLElement | null = document.getElementById("Editor");
    if (!editButton) throw "editButton is null";
    const previewButton: HTMLElement | null = document.getElementById("Preview");
    if (!previewButton) throw "previewButton is null.";

    // エディターボタンがクリックされた時
    editButton.addEventListener("click", () => {
      triggerAntinomyButtons(editButton, previewButton);
      changeAppearance(0);
    });

    // プレビューボタンがクリックされた時
    previewButton.addEventListener("click", () => {
      triggerAntinomyButtons(previewButton, editButton);
      parseElement();
      changeAppearance(1);
    });

    // エディターとプレビューを切り替えるキーボードショートカット
    window.addEventListener("keydown", (event) => {
      if (event.key === "e" && event.ctrlKey) {
        if (editButton.hasAttribute("disabled")) return previewButton.click();
        return editButton.click();
      }
    });
  });

  // 押されたボタンをdisabledにして他方のdisabledを削除する
  // disabledにしないと、すでに押してある方を押した際の無駄な条件分岐が発生する
  // disabledにすることでSCSSの指定が楽になると言うメリットもある
  const triggerAntinomyButtons = (clicked: HTMLElement, another: HTMLElement): void => {
    clicked.setAttribute("disabled", "true");
    // 押されたボタンのIDを取得してタイトルにぶち込む
    const idName: string | null = clicked.getAttribute("id");
    if (!idName) throw "idName is null";
    document.title = `SLOUCH - ${idName}`;
    // 他方のボタンがdisabledだったらそれを削除する
    if (another.hasAttribute("disabled")) another.removeAttribute("disabled");
  };
</script>

<div class="editor-button-group">
  <button class="editor-button" id="Preview" data-tooltip="Ctrl + E"><i class="fas fa-eye"></i></button>
  <button class="editor-button" id="Editor" data-tooltip="Ctrl + E" disabled><i class="fas fa-pencil-alt"></i></button>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .editor-button-group {
    @extend %center;
    padding-top: 30px;
    .editor-button {
      margin: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 4px $slouch-green solid;
      color: $slouch-green;
      font-size: 18px;
      transition: 0.2s;
      position: relative;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:disabled {
        background-color: $slouch-green;
        color: $general-white;
        transition: 0.2s;
      }
    }
  }
  @media (max-aspect-ratio: 1/1) {
    .editor-button-group {
      padding: 10px 0;
      .editor-button {
        margin: 0 10px;
      }
    }
  }
</style>
