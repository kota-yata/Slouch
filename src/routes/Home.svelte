<script lang="ts">
  import ComingSoon from "../components/ComingSoon.svelte";
  import CountGroup from "../components/CountGroup.svelte";
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import CenterNote, { ParsingMD } from "../components/CenterNote.svelte";
  import ProfileStuff from "../components/ProfileStuff.svelte";
  import SideCard from "../components/SideCard.svelte";
  import FileButtonGroup from "../components/FileButtonGroup.svelte";
  import EditorButtonGroup from "../components/EditorButtonGroup.svelte";
  import Copyright from "../components/Copyright.svelte";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { push } from "svelte-spa-router";
  import { getDbRoot, insertBody } from "../utils/dbUtils.svelte";
  import Toast, { fireToast } from "../components/Toast.svelte";
  import { getBrowser } from "../utils/checkOS.svelte";
  import { onMount } from "svelte";
  import { getEditorPreviewDOM } from "../utils/getEditorPreviewDom.svelte";

  const isLandScape: boolean = window.innerWidth > window.innerHeight;
  const cardWidth: string = isLandScape ? "20vw" : "80vw";
  const cardHeight: string = isLandScape ? "60vh" : "15vh";

  firebase.auth().onAuthStateChanged((user: any): any => {
    if (!user) return push("/signin");
    sessionStorage.setItem("uid", user.uid);
    console.log("--- Firebase user is detected ---");
  });

  let titleValue: string = "無題のノート";
  onMount(async () => {
    console.log("--- DOM contents are loaded ---");
    getEditorPreviewDOM.initialize();
    ParsingMD.getNoteDom();
    const dbRoot: dbRoot = await getDbRoot();
    if (!dbRoot.current) return;
    const currentNote: any = dbRoot.current.data().current;
    if (!currentNote) return;
    titleValue = dbRoot.current.data()[currentNote].title;
    const currentNoteBody: string = dbRoot.current.data()[currentNote].body;
    insertBody(currentNoteBody);
    alertForFirefox();
  });

  const alertForFirefox = (): void => {
    const isFirefox = getBrowser() === "Firefox";
    if (!isFirefox) return;
    fireToast("お使いのブラウザではエディターがうまく機能しない可能性があります", "message");
  };

  const backSideCard = (): void => {
    const toolCard: HTMLElement | null = document.getElementById("tool_card");
    if (!toolCard) throw new Error("Tool card doesn't exist");
    toolCard.classList.remove("visible");
    const toBeInserted: HTMLElement | null = document.getElementById("to_be_inserted");
    if (!toBeInserted) throw new Error("toBeInserted div doesn't exist");
    toBeInserted.textContent = "";
  };

  const toggleRightCard = (): void => {
    const rightToolCard: Element | null = document.getElementsByClassName("right-card")[0];
    if (!rightToolCard) throw new Error("rightToolCard doesn't exist");
    const rightCard: Element | null = document.getElementsByClassName("right-card")[1];
    if (!rightCard) throw new Error("rightCard doesn't exist");
    rightToolCard.classList.toggle("right-card-visible");
    rightCard.classList.toggle("right-card-visible");
  };
</script>

<HeaderLogo />
{#if !isLandScape}
  <div class="humburger-container">
    <button class="humburger-button" on:click="{toggleRightCard}"><i class="fas fa-sliders-h"></i></button>
  </div>
{/if}
<div class="toast-container">
  <Toast />
</div>
<div class="tool-card right-card side-card" id="tool_card">
  <SideCard width="{cardWidth}">
    <div slot="content">
      <button class="backward-button" id="backward_button" on:click="{backSideCard}"><i
          class="fas fa-angle-left"
        ></i></button>
      <div id="to_be_inserted"></div>
    </div>
  </SideCard>
</div>
<div class="right-card side-card">
  <SideCard width="{cardWidth}">
    <div slot="content">
      <ProfileStuff bind:titleValue />
      <FileButtonGroup />
      <Copyright />
    </div>
  </SideCard>
</div>
<div class="note-container">
  <CenterNote />
</div>
<div class="left-card side-card">
  <SideCard id="left_card" width="{cardWidth}" height="{cardHeight}">
    <div class="content" slot="content">
      <EditorButtonGroup />
      {#if isLandScape}
        <CountGroup />
        <ComingSoon />
      {/if}
    </div>
  </SideCard>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .humburger-container {
    position: fixed;
    top: 2.5vh;
    right: 3vh;
    .humburger-button {
      color: $slouch-green;
      font-size: 23px;
    }
  }
  .side-card {
    position: fixed;
    top: calc(
      50% - #{$left-card-height} / 2
    ); // カードの高さ/2をページの高さ/2から引き、それをカード最上部の位置にすればカードは上下でセンタリングされる
  }
  .left-card {
    left: 2vw;
  }
  .tool-card {
    visibility: hidden;
    opacity: 0;
    transition: 0.1s;
    .backward-button {
      color: $slouch-green;
      font-size: 25px;
      margin: 10px;
      padding: 5px;
      width: 50px;
      border-radius: 10px;
      transition: 0.1s;
      i {
        cursor: pointer;
      }
      &:hover {
        background: $general-white;
        transition: 0.1s;
      }
    }
  }
  .right-card {
    z-index: 5;
    right: 2vw;
    transition: 0.3s;
  }
  #to_be_inserted {
    @extend %center;
    height: calc(60vh - 90px);
    overflow-y: scroll;
  }

  @media (max-aspect-ratio: 1/1) {
    .left-card {
      position: relative;
      height: 15vh;
      padding: 3vh 0 1vh 0;
      display: flex;
      justify-content: center;
      left: auto;
      top: auto;
      .content {
        display: flex;
        flex-flow: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        height: 15vh;
      }
    }
    .right-card {
      top: 100px;
      right: -80vw;
    }
    .note-container {
      position: relative;
      width: 100vw;
      height: calc(100vh - 76px - 25vh);
    }
  }
</style>
