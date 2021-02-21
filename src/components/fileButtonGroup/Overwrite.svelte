<script lang="ts" context="module">
  import { commandType } from "../../utils/checkOS.js";
  import { FileHandler, generateRandomNID, generateFormattedDate, getDbRoot } from "../../utils/dbUtils.svelte";
  import getEditorPreviewDOM from "../../utils/getEditorPreviewDom.js";
  import { fireToast } from "../Toast.svelte";

  // SLOUCHノートを上書きする
  export const writeToSlouch = async (dataObj: notesObj) => {
    const dbRoot: dbRoot = await getDbRoot();
    // currentのIDが空だった場合新しくNIDを発行し、DBに追加する
    const isDbRootEmpty = !dbRoot.current || !dbRoot.current.exists;
    if (isDbRootEmpty || !dbRoot.current.data().current) {
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
    const noteBody: string = getEditorPreviewDOM.getOnlyBody();
    const fileHandle: any = FileHandler.get();
    const writable: any = await fileHandle.createWritable();
    await writable.write(noteBody);
    await writable.close();
    const noteTitle: string = getEditorPreviewDOM.getOnlyTitle();
    fireToast(`${noteTitle}をローカルに保存しました`);
  };

  const html: string = `
  <div class="container">\
    <span class="file-sentence">方法を選ぶ</span>\
    <button class="file-button-button overwrite-button" id="overwrite_slouch" data-tooltip="${commandType} + S">SLOUCHノートを上書き</button>\
    <button class="file-button-button overwrite-button" id="overwrite_local" data-tooltip="${commandType} + Shift + S">ローカルを上書き</button>\
    <span class="overwrite-a">PCにファイルが存在する場合のみ</span>\
  </div>`;

  export const overwriteInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
    // 「SLOUCHノートを上書き」がクリックされた場合
    const overwriteSlouch: HTMLElement | null = document.getElementById("overwrite_slouch");
    if (!overwriteSlouch) throw new Error("overwriteSlouch button doesn't exist");

    overwriteSlouch.addEventListener("click", async () => {
      const dataObj: notesObj = getEditorPreviewDOM.getAllAsObj();
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
