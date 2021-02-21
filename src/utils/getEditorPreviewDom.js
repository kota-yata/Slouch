"use strict";

import { generateFormattedDate } from "./dbUtils.svelte";

export default class getEditorPreviewDOM {
  static initialize() {
    const noteTitleDom = document.getElementById("note_title");
    if (!noteTitleDom) throw new Error("noteTitleDom doesn't exist");
    this.noteTitleDom = noteTitleDom;
    const noteContentDom = document.getElementById("main_note");
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

window.addEventListener("DOMContentLoaded", () => {
  getEditorPreviewDOM.initialize();
});
