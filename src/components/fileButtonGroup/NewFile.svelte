<script lang="ts" context="module">
  import { commandType } from "../../utils/checkOS.js";
  import { insertTitle, insertBody, getDbRoot, generateRandomNID, generateFormattedDate } from "../../utils/dbUtils.js";
  import FileHandler from "../../utils/dbUtils.js";
  import firebase from "firebase/app";
  import "firebase/firestore";
  import { fireToast } from "../../utils/fireToast.js";
  import { backToHome } from "../../utils/backToHome.js";

  const html: string = `
  <div class="container">\
    <span class="file-sentence">作成方法を選ぶ</span>\
    <button class="file-button-button overwrite-button" id="newfile_new" data-tooltip="${commandType} + N">あたらしく作る</button>\
    <button class="file-button-button overwrite-button" id="newfile_local" data-tooltip="${commandType} + I">ローカルから読み込む</button>\
    <a href="#/help" class="overwrite-a">なにが違うの?</a>\
  </div>`;

  const openBrandNew = async () => {
    insertTitle("無題のノート");
    insertBody("");
    const dbRoot: dbRoot = await getDbRoot();
    if (!dbRoot.current) throw new Error("dbRoot doesn't exist");
    dbRoot.uRoot.update({
      current: firebase.firestore.FieldValue.delete(),
    });
    FileHandler.remove();
  };

  const saveNewLocalFileToDb = async (title: string, body: string, fileHandle: any) => {
    const dbRoot: dbRoot = await getDbRoot();
    if (!dbRoot.current) throw new Error("dbRoot doesn't exist");
    const dataObj: notesObj = {
      title: title,
      body: body,
      date: generateFormattedDate(),
    };
    const randomNID: string = generateRandomNID();
    dbRoot.uRoot.set(
      {
        current: randomNID,
        [randomNID]: dataObj,
      },
      { merge: true },
    );
  };

  const openLocalFile = async () => {
    const hasShowOpenFilePicker: boolean = "showOpenFilePicker" in window;
    if (!hasShowOpenFilePicker) throw new Error("This browser doesn't have showOpenFilePicker in window");
    const opts = {
      types: [
        {
          description: "Markdown",
          accept: { "text/markdown": [".md"] },
        },
      ],
      multiple: false,
    };
    let fileHandle: any;
    [fileHandle] = await window.showOpenFilePicker(opts);
    const fileInfo: any = await fileHandle.getFile();
    const fileBody: string = await fileInfo.text();
    const fileTitle: string = await fileInfo.name.replace(/\.[^.]*$/, "");
    insertTitle(fileTitle);
    insertBody(fileBody);
    saveNewLocalFileToDb(fileTitle, fileBody, fileHandle);
    FileHandler.store(fileHandle);
  };

  export const newFileInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
    // 「新しく作る」がクリックされた場合
    const newFileNew: HTMLElement | null = document.getElementById("newfile_new");
    if (!newFileNew) throw new Error("newFileNew doesn't exist");
    newFileNew.addEventListener("click", async () => {
      await openBrandNew();
      fireToast("ノートが作成されました！");
      backToHome();
    });
    // 「ローカルから読み込む」がクリックされた場合
    const newFileLocal: HTMLElement | null = document.getElementById("newfile_local");
    if (!newFileLocal) throw new Error("newFileLocal doesn't exist");
    newFileLocal.addEventListener("click", async () => {
      await openLocalFile();
      fireToast("ノートを読み込みました！");
      backToHome();
    });
  };
</script>
