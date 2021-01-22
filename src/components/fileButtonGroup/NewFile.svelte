<script lang="ts" context="module">
  import { commandType } from "../../utils/checkOS.js";
  import { insertTitle, insertBody, getDbRoot } from "../../utils/dbUtils.js";
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

  export const newFileInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
    const newFileNew: HTMLElement | null = document.getElementById("newfile_new");
    if (!newFileNew) throw new Error("newFileNew doesn't exist");
    newFileNew.addEventListener("click", async () => {
      insertTitle("無題のノート");
      insertBody("");
      const dbRoot: dbRoot = await getDbRoot();
      if (!dbRoot.current) throw new Error("dbRoot doesn't exist");
      dbRoot.uRoot.update({
        current: firebase.firestore.FieldValue.delete(),
      });
      fireToast("ノートが作成されました");
      backToHome();
    });
  };
</script>
