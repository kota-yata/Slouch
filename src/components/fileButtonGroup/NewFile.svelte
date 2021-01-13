<script lang="ts" context="module">
  const html: string =
    '\
  <div class="container">\
    <span class="file-sentence">作成方法を選ぶ</span>\
    <button class="file-button-button overwrite-button" id="newfile-new">あたらしく作る</button>\
    <button class="file-button-button overwrite-button" id="newfile-local">ローカルから読み込む</button>\
    <a href="#/help" class="overwrite-a">なにが違うの?</a>\
  </div>';

  export const newFileInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
  };
</script>
