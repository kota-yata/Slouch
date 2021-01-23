"use strict";

import { generateFormattedDate } from "./dbUtils.js";

export default class getEditorPreviewDOM {
  constructor() {
    const noteTitleDom = document.getElementById("note_title");
    if (!noteTitleDom) throw new Error("noteTitleDom doesn't exist");
    this.noteTitleDom = noteTitleDom;
    const noteContentDom = document.getElementById("main_note");
    if (!noteContentDom) throw new Error("noteContentDom doesn't exist");
    this.noteContentDom = noteContentDom;
  }
  getAllAsObj() {
    const dataObj = {
      title: this.noteTitleDom.value,
      date: generateFormattedDate(),
      body: this.noteContentDom.value,
    };
    return dataObj;
  }
  getOnlyBody() {
    return this.noteContentDom.value;
  }
  getOnlyTitle() {
    return this.noteTitleDom.value;
  }
}
