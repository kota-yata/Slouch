<script lang="ts">
  interface fileButton {
    icon: string;
    words: string;
  }

  const fileButtonArray: fileButton[] = [
    { icon: "add", words: "新規作成" },
    { icon: "save", words: "上書き保存" },
    { icon: "get_app", words: "ダウンロード" },
    { icon: "info", words: "ヘルプ" },
  ];
</script>

<div class="file-button-container">
  {#each fileButtonArray as { icon, words }, i}
    <button class="file-button">
      <span class="material-icons file-button-icon">{icon}</span>
      <span class="file-button-words">{words}</span>
    </button>
  {/each}
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .file-button-container {
    @extend %center;
    width: 100%;
    .file-button {
      cursor: pointer;
      text-align: left;
      width: 80%;
      padding: 6% 0 6% 10%;
      border-bottom: $slouch-border;
      transition: 0.1s;
      &-icon {
        color: $slouch-green;
        font-size: 30px;
        display: inline-flex;
        vertical-align: middle;
        padding: 0px 10px;
      }
      &-words {
        color: $slouch-navy;
        font-family: "nsjp";
        font-weight: bold;
        font-size: 18px;
        display: inline-flex;
        vertical-align: middle;
      }
      &:hover {
        background: $general-white;
        transition: 0.1s;
      }
    }
  }
</style>
