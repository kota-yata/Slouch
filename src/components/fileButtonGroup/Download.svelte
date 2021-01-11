<script lang="ts" context="module">
  const html: string =
    '\
  <div class="container">\
    <span class="file-sentence">形式を選ぶ</span>\
    <button class="file-button-button download-button" id="download-md">.mdファイル</button>\
    <button class="file-button-button download-button" id="download-txt">.txtファイル</button>\
    <button class="file-button-button download-button" id="download-html">.htmlファイル</button>\
  </div>';

  export const downloadInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
  };
</script>
