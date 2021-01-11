<script lang="ts" context="module">
  const html: string =
    '\
  <div class="container">\
    <span class="file-sentence">方法を選ぶ</span>\
    <button class="file-button-button overwrite-button" id="overwrite-slouch">SLOUCHノートを上書き</button>\
    <button class="file-button-button overwrite-button" id="overwrite-local">ローカルを上書き</button>\
    <a href="#/help" class="overwrite-a">なにが違うの?</a>\
  </div>';

  export const overwriteInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
  };
</script>
