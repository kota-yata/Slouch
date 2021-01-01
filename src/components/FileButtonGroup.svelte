<script lang="ts">
  import { link } from "svelte-spa-router";

  interface fileButton {
    icon: string;
    words: string;
    href?: string;
  }

  const fileButtonArray: fileButton[] = [
    { icon: "plus", words: "新規作成" },
    { icon: "save", words: "上書き保存" },
    { icon: "download", words: "ダウンロード" },
    { icon: "question", words: "ヘルプ" },
    { icon: "sign-out-alt", words: "サインアウト", href: "/signin" },
  ];
</script>

<div class="file-button-container">
  {#each fileButtonArray as { icon, words, href }, i}
    {#if href}
      <a href="{href}" use:link>
        <button class="file-button" id="{icon}">
          <span class="fas fa-{icon} file-button-icon"></span>
          <span class="file-button-words">{words}</span>
        </button>
      </a>
    {:else}
      <button class="file-button" id="{icon}">
        <span class="fas fa-{icon} file-button-icon"></span>
        <span class="file-button-words">{words}</span>
      </button>
    {/if}
  {/each}
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .file-button-container {
    @extend %center;
    width: 100%;
    height: 100%;
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
        padding: 0 0 0 5%;
        height: 8vh;
        &-icon {
          font-size: 20px;
        }
        &-words {
          font-size: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .file-button-container {
      .file-button {
        height: 7vh;
        padding: 0 0 0 3%;
        &-icon {
          font-size: 15px;
        }
        &-words {
          font-size: 10px;
        }
      }
    }
  }
</style>
