<script lang="ts">
  export let width: string;
  export let height: string;
</script>

<textarea class="main-note" style="width:{width}; height:{height};"></textarea>

<style lang="scss">
  @import "../assets/definition.scss";

  .main-note {
    position: absolute;
    top: calc(
      50% - #{$center-note-height} / 2 - #{$center-note-padding}
    ); // ページの高さ/2 - カードの高さ/2 - paddingで上下センタリングされる
    left: calc(
      50% - #{$center-note-height} * #{$A4RATIO} / 2 - #{$center-note-padding}
    ); // A4サイズ(1:1.414)に横幅を合わせ、ページの横幅/2 - テキストエリアの横幅/2 - paddingで左右センタリングする
    background: $complete-white;
    font-family: "nsjp", sans-serif;
    resize: none;
    padding: $center-note-padding;
  }
</style>
