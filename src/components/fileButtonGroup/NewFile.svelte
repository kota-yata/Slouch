<script lang="ts" context="module">
  import { commandType } from "../../utils/checkOS.js";
  import { insertTitle, insertBody } from "../../utils/dbUtils.js";

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
    newFileNew.addEventListener("click", () => {
      insertTitle("無題のノート");
      insertBody("");
      const backwardButton: HTMLElement | null = document.getElementById("backward_button");
      if (!backwardButton) throw new Error("backwardButton doesn't exist");
      backwardButton.click();
    });
  };
</script>
