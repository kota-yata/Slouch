<script lang="ts" context="module">
  import { generateFormattedDate } from "./dbUtils.svelte";

  export class getEditorPreviewDOM {
    static noteTitleDom: HTMLInputElement;
    static noteContentDom: HTMLInputElement;

    static initialize() {
      const noteTitleDom: HTMLInputElement | null = document.getElementById("note_title") as HTMLInputElement;
      if (!noteTitleDom) throw new Error("noteTitleDom doesn't exist");
      this.noteTitleDom = noteTitleDom;
      const noteContentDom: HTMLInputElement | null = document.getElementById("main_note") as HTMLInputElement;
      if (!noteContentDom) throw new Error("noteContentDom doesn't exist");
      this.noteContentDom = noteContentDom;
    }

    static getAllAsObj() {
      const dataObj = {
        title: this.noteTitleDom.value,
        date: generateFormattedDate(),
        body: this.noteContentDom.value,
      };
      return dataObj;
    }

    static getOnlyBody() {
      return this.noteContentDom.value;
    }

    static getOnlyTitle() {
      return this.noteTitleDom.value;
    }
  }
</script>
