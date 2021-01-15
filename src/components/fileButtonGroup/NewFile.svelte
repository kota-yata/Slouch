<script lang="ts" context="module">
  import { commandType } from "../../utils/checkOS.js";
  const html: string = `
  <div class="container">\
    <span class="file-sentence">作成方法を選ぶ</span>\
    <button class="file-button-button overwrite-button" id="newfile-new" data-tooltip="${commandType} + N">あたらしく作る</button>\
    <button class="file-button-button overwrite-button" id="newfile-local" data-tooltip="${commandType} + I">ローカルから読み込む</button>\
    <a href="#/help" class="overwrite-a">なにが違うの?</a>\
  </div>`;

  export const newFileInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
  };
</script>
