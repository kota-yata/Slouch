<script lang="ts">
  import { ParsingMD } from "./CenterNote.svelte";

  class EditorButtons {
    editButton: HTMLElement;
    previewButton: HTMLElement;

    constructor(editElement: HTMLElement, previewElement: HTMLElement) {
      this.editButton = editElement;
      this.previewButton = previewElement;
      console.log("--- Got previewButton and EditorButton ---");
    }

    changeAppearanceToEditor() {
      triggerAntinomyButtons(this.editButton, this.previewButton);
      ParsingMD.changeAppearance(0);
    }

    changeAppearanceToPreview() {
      triggerAntinomyButtons(this.previewButton, this.editButton);
      ParsingMD.parseElement();
      ParsingMD.changeAppearance(1);
    }

    emulateClicking() {
      if (this.editButton.hasAttribute("disabled")) return this.previewButton.click();
      return this.editButton.click();
    }
  }

  // クラスのインスタンスをグローバルに生成する
  let editorButtonsGlobal: EditorButtons;
  window.addEventListener("DOMContentLoaded", (): void => {
    const editElement: HTMLElement | null = document.getElementById("Editor");
    if (!editElement) throw new Error("editButton is null");
    const previewElement: HTMLElement | null = document.getElementById("Preview");
    if (!previewElement) throw new Error("previewButton is null.");
    editorButtonsGlobal = new EditorButtons(editElement, previewElement);
  });

  const editorButtonOnclick = (): void => {
    editorButtonsGlobal.changeAppearanceToEditor();
  };
  const previewButtonOnclick = (): void => {
    editorButtonsGlobal.changeAppearanceToPreview();
  };

  // 押されたボタンをdisabledにして他方のdisabledを削除する
  const triggerAntinomyButtons = (clicked: HTMLElement, another: HTMLElement): void => {
    clicked.setAttribute("disabled", "true");
    // 押されたボタンのIDを取得してタイトルにぶち込む
    const idName: string | null = clicked.getAttribute("id");
    if (!idName) throw new Error("idName is null");
    document.title = `SLOUCH - ${idName}`;
    // 他方のボタンがdisabledだったらそれを削除する
    if (another.hasAttribute("disabled")) another.removeAttribute("disabled");
  };

  // エディターとプレビューを切り替えるキーボードショートカット
  window.addEventListener("keydown", (event) => {
    if (event.key === "e" && event.ctrlKey) {
      editorButtonsGlobal.emulateClicking();
    }
  });
</script>

<svelte:head>
  <title>SLOUCH - Editor</title>
</svelte:head>

<div class="editor-button-group">
  <button class="editor-button" id="Preview" data-tooltip="Ctrl + E" on:click="{previewButtonOnclick}"><i
      class="fas fa-eye"
    ></i></button>
  <button class="editor-button" id="Editor" data-tooltip="Ctrl + E" on:click="{editorButtonOnclick}" disabled><i
      class="fas fa-pencil-alt"
    ></i></button>
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
