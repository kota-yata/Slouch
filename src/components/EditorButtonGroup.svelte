<script lang="ts">
  import { parseElement, changeAppearance } from "./CenterNote.svelte";

  window.addEventListener("DOMContentLoaded", (): void => {
    // 初期画面はエディターなのでタイトルもEditorにしておく
    document.title = "SLOUCH - Editor";
    // 二つのボタンを取得してnullだったら早めに返しておく
    const editButton: HTMLElement | null = document.getElementById("Editor");
    if (!editButton) throw "editButton is null";
    const previewButton: HTMLElement | null = document.getElementById("Preview");
    if (!previewButton) throw "previewButton is null.";

    const antinomyArray: HTMLElement[] = [editButton, previewButton];

    editButton.addEventListener("click", () => {
      triggerAntinomyButtons(editButton, previewButton);
      changeAppearance(0);
    });
    previewButton.addEventListener("click", () => {
      triggerAntinomyButtons(previewButton, editButton);
      parseElement();
      changeAppearance(1);
    });
  });

  // 押されたボタンをdisabledにして他方のdisabledを削除する
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
  <button class="editor-button fas fa-eye" id="Preview"></button>
  <button class="editor-button fas fa-pencil-alt" id="Editor" disabled></button>
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
      &:disabled {
        background-color: $slouch-green;
        color: $general-white;
        transition: 0.2s;
      }
    }
  }
</style>
