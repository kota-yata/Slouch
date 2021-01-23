<script lang="ts">
  import { push } from "svelte-spa-router";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { downloadInsertHTML } from "./fileButtonGroup/Download.svelte";
  import { overwriteInsertHTML } from "./fileButtonGroup/Overwrite.svelte";
  import { newFileInsertHTML } from "./fileButtonGroup/NewFile.svelte";
  import { myNoteInsertHTML } from "./fileButtonGroup/MyNote.svelte";

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
  const toggleToolCard = (icon: string): void => {
    const toolCard: HTMLElement | null = document.getElementById("tool_card");
    if (!toolCard) throw new Error("Tool card doesn't exist");
    toolCard.classList.add("visible");
    toolCard.style.zIndex = "7";
    const uid: string | null = sessionStorage.getItem("uid");
    if (!uid) throw new Error("uid doesn't exist in sessionStorage");
    const toBeInserted: HTMLElement | null = document.getElementById("to_be_inserted");
    if (!toBeInserted) throw new Error("toBeInserted div doesn't exist");
    if (icon === "download") downloadInsertHTML(toBeInserted);
    if (icon === "save") overwriteInsertHTML(toBeInserted);
    if (icon === "plus") newFileInsertHTML(toBeInserted);
    if (icon === "user-circle") myNoteInsertHTML(toBeInserted);
  };
  const jumpToHelp = (): void => {
    window.open("#/help");
  };

  const fileButtonArray: fileButton[] = [
    { icon: "user-circle", words: "マイノート", onclick: toggleToolCard },
    { icon: "plus", words: "新規作成", onclick: toggleToolCard },
    { icon: "save", words: "上書き保存", onclick: toggleToolCard },
    { icon: "download", words: "ダウンロード", onclick: toggleToolCard },
    { icon: "question", words: "ヘルプ", onclick: jumpToHelp },
    { icon: "sign-out-alt", words: "サインアウト", onclick: signOut },
  ];
</script>

<div class="file-button-container">
  {#each fileButtonArray as { icon, words, onclick }, i}
    <button
      class="file-button"
      id="{icon}"
      on:click="{() => {
        onclick(icon);
      }}"
    >
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
