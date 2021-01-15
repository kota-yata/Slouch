<script lang="ts" context="module">
  import { commandType } from "../../utils/checkOS.js";
  import firebase from "firebase/app";
  import "firebase/firestore";
  import { generateRandomNID, generateFormattedDate, getDbRoot } from "../../utils/dbUtils.js";

  // SLOUCHノートを上書きする
  // currentのIDが存在する場合はそのNIDのname, date, bodyを更新する
  export const overwriteSlouchOnclick = (): void => {
    const overwriteSlouch: HTMLElement | null = document.getElementById("overwrite_slouch");
    if (!overwriteSlouch) throw new Error("overwriteSlouch button doesn't exist");

    overwriteSlouch.addEventListener("click", async () => {
      const noteTitleDom: HTMLInputElement | null = document.getElementById("note_title") as HTMLInputElement;
      if (!noteTitleDom) throw new Error("noteTitleDom doesn't exist");
      const noteContentDom: HTMLInputElement | null = document.getElementById("main_note") as HTMLInputElement;
      if (!noteContentDom) throw new Error("noteContentDom doesn't exist");
      const dbRoot: dbRoot = await getDbRoot();
      const dataObj: notesObj = {
        name: noteTitleDom.value,
        date: generateFormattedDate(),
        body: noteContentDom.value,
      };
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
        return;
      }
      dbRoot.uRoot.set(
        {
          [dbRoot.current.data().current]: dataObj,
        },
        { merge: true },
      );
    });
  };

  const uid: string | null = sessionStorage.getItem("uid");
  if (!uid) throw new Error("uid doesn't exist");
  const html: string = `
  <div class="container">\
    <span class="file-sentence">方法を選ぶ</span>\
    <button class="file-button-button overwrite-button" id="overwrite_slouch" data-tooltip="${commandType} + S">SLOUCHノートを上書き</button>\
    <button class="file-button-button overwrite-button" id="overwrite_local" data-tooltip="${commandType} + Shift + S">ローカルを上書き</button>\
    <a href="#/help" class="overwrite-a">なにが違うの?</a>\
  </div>`;

  export const overwriteInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
  };
</script>
