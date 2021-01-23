<script lang="ts" context="module">
  import { commandType } from "../../utils/checkOS.js";
  import FileHandler, { generateRandomNID, generateFormattedDate, getDbRoot } from "../../utils/dbUtils.js";
  import getEditorPreviewDOM from "../../utils/getEditorPreviewDom.js";
  import { fireToast } from "../../utils/fireToast.js";

  // SLOUCHノートを上書きする
  export const writeToSlouch = async (dataObj: notesObj) => {
    const dbRoot: dbRoot = await getDbRoot();
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

  export const writeToLocal = async () => {
    const DOM = new getEditorPreviewDOM();
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
      const DOM = new getEditorPreviewDOM();
      const dataObj: notesObj = DOM.getAllAsObj();
      await writeToSlouch(dataObj);
    });
    // 「ローカルを上書き」がクリックされた場合
    const overwriteLocal: HTMLElement | null = document.getElementById("overwrite_local");
    if (!overwriteLocal) throw new Error("overwriteLocal button doesn't exist");

    overwriteLocal.addEventListener("click", () => {
      writeToLocal();
    });
  };
</script>
