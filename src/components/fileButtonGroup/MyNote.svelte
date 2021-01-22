<script lang="ts" context="module">
  import { backToHome } from "../../utils/backToHome.js";

  import { getDbRoot, insertTitle, insertBody } from "../../utils/dbUtils.js";

  // ノート一つ一つのタイトルと最終更新日のDOMを生成する
  const generateHTML = (nid: string, title: string, date: string): string => {
    const html: string = `
      <button class="mynote-container" id="${nid}">
        <div class="mynote-title">${title}</div>
        <div class="mynote-date">${date}</div>
      </button>`;
    return html;
  };

  // uid内のcurrent以外のノートデータを全て取得して連想配列で返す
  const getNoteFromDb = async () => {
    const dbRoot: dbRoot = await getDbRoot();
    if (!dbRoot.current) throw new Error("dbRoot doesn't exist");
    const keyArray: string[] = Object.keys(dbRoot.current.data());
    const resultArray: notesObj[] = [];
    for (let i = 0; i < keyArray.length; i++) {
      if (keyArray[i] === "current") continue;
      const obj: notesObj = {
        nid: keyArray[i],
        title: dbRoot.current.data()[keyArray[i]].title,
        date: dbRoot.current.data()[keyArray[i]].date,
        body: dbRoot.current.data()[keyArray[i]].body,
      };
      resultArray.push(obj);
    }
    return resultArray;
  };

  // マイノートでノートがクリックされたらnidをcurrentに登録し、bodyをmain_noteに挿入する
  const individualNoteOnclick = async (nid: string, title: string, body: string) => {
    const dbRoot: dbRoot = await getDbRoot();
    if (!dbRoot.current) throw new Error("dbRoot doesn't exist");
    dbRoot.uRoot.set(
      {
        current: nid,
      },
      { merge: true },
    );
    insertTitle(title);
    insertBody(body);
    backToHome();
  };

  export const myNoteInsertHTML = async (element: HTMLElement) => {
    const noteDataArray: notesObj[] = await getNoteFromDb();
    const titleHTML: string = '<div class="file-sentence mynote-sentence">ノートを選ぶ</div>';
    element.insertAdjacentHTML("beforeend", titleHTML);
    noteDataArray.map((note: notesObj) => {
      const nid: string | undefined = note.nid;
      if (!nid) throw new Error("nid doesn't exist");
      const noteHTML: string = generateHTML(nid, note.title, note.date);
      element.insertAdjacentHTML("beforeend", noteHTML);
      const noteButton: HTMLElement | null = document.getElementById(nid);
      if (!noteButton) throw new Error("noteButton doesn't exist");
      noteButton.addEventListener("click", () => {
        console.log("--- Firebase one of mynote buttons was clicked ---");
        individualNoteOnclick(nid, note.title, note.body);
      });
    });
    console.log("--- Firebase mynote is being shown ---");
  };
</script>
