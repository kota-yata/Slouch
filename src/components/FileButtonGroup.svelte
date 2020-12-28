<script lang="ts">
  interface fileButton {
    icon: string;
    words: string;
  }

  const fileButtonArray: fileButton[] = [
    { icon: "plus", words: "新規作成" },
    { icon: "save", words: "上書き保存" },
    { icon: "download", words: "ダウンロード" },
    { icon: "question", words: "ヘルプ" },
    { icon: "sign-out-alt", words: "サインアウト" },
  ];
</script>

<div class="file-button-container">
  {#each fileButtonArray as { icon, words }, i}
    <button class="file-button">
      <span class="fas fa-{icon} file-button-icon"></span>
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
      text-align: left;
      width: 80%;
      padding: 5% 0 5% 10%;
      border-bottom: $slouch-border;
      transition: 0.1s;
      &-icon {
        color: $slouch-green;
        font-size: 25px;
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

  @media screen and (max-width: 1200px) {
    .file-button-container {
      .file-button {
        padding-left: 5%;
        &-icon {
          font-size: 20px;
        }
        &-words {
          font-size: 15px;
        }
      }
    }
  }
</style>
