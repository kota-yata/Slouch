<script lang="ts">
  import { push } from "svelte-spa-router";
  import firebase from "firebase/app";
  import "firebase/auth";

  interface fileButton {
    icon: string;
    words: string;
    onclick?: any;
  }

  const signOut = (): void => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        push("/signin");
      });
  };

  const fileButtonArray: fileButton[] = [
    { icon: "user-circle", words: "マイノート" },
    { icon: "plus", words: "新規作成" },
    { icon: "save", words: "上書き保存" },
    { icon: "download", words: "ダウンロード" },
    { icon: "question", words: "ヘルプ" },
    { icon: "sign-out-alt", words: "サインアウト", onclick: signOut },
  ];
</script>

<div class="file-button-container">
  {#each fileButtonArray as { icon, words, onclick }, i}
    <button class="file-button" id="{icon}" on:click="{onclick}">
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
        height: 6.5vh;
        &-icon {
          font-size: 19px;
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
  @media (max-aspect-ratio: 1/1) {
    .file-button-container {
      .file-button {
        height: 7vh;
        padding: 0 0 0 1%;
        &-icon {
          font-size: 18px;
        }
        &-words {
          font-size: 13px;
        }
      }
    }
  }
</style>
