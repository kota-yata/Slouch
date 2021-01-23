<script lang="ts" context="module">
  import { commandType } from "../../utils/checkOS.js";
  import FileHandler, { generateRandomNID, generateFormattedDate, getDbRoot } from "../../utils/dbUtils.js";
  import { fireToast } from "../../utils/fireToast.js";

  class getDOM {
    noteContentDom: HTMLInputElement;
    noteTitleDom: HTMLInputElement;
    constructor() {
      const noteTitleDom: HTMLInputElement | null = document.getElementById("note_title") as HTMLInputElement;
      if (!noteTitleDom) throw new Error("noteTitleDom doesn't exist");
      this.noteTitleDom = noteTitleDom;
      const noteContentDom: HTMLInputElement | null = document.getElementById("main_note") as HTMLInputElement;
      if (!noteContentDom) throw new Error("noteContentDom doesn't exist");
      this.noteContentDom = noteContentDom;
    }
    getAllAsObj() {
      const dataObj: notesObj = {
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

  // SLOUCHノートを上書きする
  const writeToSlouch = async () => {
    const dbRoot: dbRoot = await getDbRoot();
    const DOM = new getDOM();
    const dataObj: notesObj = DOM.getAllAsObj();
    // currentのIDが空だった場合新しくNIDを発行し、DBに追加する
    if (!dbRoot.current.exists || !dbRoot.current.data().current) {
      const randomNID: string = generateRandomNID();
      dbRoot.uRoot.set(
        {
          current: randomNID,
          [randomNID]: dataObj,
        },
        { merge: true },
      );
      fireToast(`${dataObj.title}をはじめて保存しました`);
      return;
    }
    dbRoot.uRoot.set(
      {
        [dbRoot.current.data().current]: dataObj,
      },
      { merge: true },
    );
    fireToast(`${dataObj.title}を上書きしました`);
  };

  const writeToLocal = async () => {
    const DOM = new getDOM();
    const noteBody: string = DOM.getOnlyBody();
    const fileHandle: any = FileHandler.get();
    const writable: any = await fileHandle.createWritable();
    await writable.write(noteBody);
    await writable.close();
    const noteTitle: string = DOM.getOnlyTitle();
    fireToast(`${noteTitle}をローカルに保存しました`);
  };

  const html: string = `
  <div class="container">\
    <span class="file-sentence">方法を選ぶ</span>\
    <button class="file-button-button overwrite-button" id="overwrite_slouch" data-tooltip="${commandType} + S">SLOUCHノートを上書き</button>\
    <button class="file-button-button overwrite-button" id="overwrite_local" data-tooltip="${commandType} + Shift + S">ローカルを上書き</button>\
    <a href="#/help" class="overwrite-a">なにが違うの?</a>\
  </div>`;

  export const overwriteInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
    // 「SLOUCHノートを上書き」がクリックされた場合
    const overwriteSlouch: HTMLElement | null = document.getElementById("overwrite_slouch");
    if (!overwriteSlouch) throw new Error("overwriteSlouch button doesn't exist");

    overwriteSlouch.addEventListener("click", async () => {
      await writeToSlouch();
    });
    // 「ローカルを上書き」がクリックされた場合
    const overwriteLocal: HTMLElement | null = document.getElementById("overwrite_local");
    if (!overwriteLocal) throw new Error("overwriteLocal button doesn't exist");

    overwriteLocal.addEventListener("click", () => {
      writeToLocal();
    });
  };
</script>
