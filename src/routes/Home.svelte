<script lang="ts">
  import ComingSoon from "../components/ComingSoon.svelte";
  import CountGroup from "../components/CountGroup.svelte";
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import CenterNote from "../components/CenterNote.svelte";
  import ProfileStuff from "../components/ProfileStuff.svelte";
  import SideCard from "../components/SideCard.svelte";
  import FileButtonGroup from "../components/FileButtonGroup.svelte";
  import EditorButtonGroup from "../components/EditorButtonGroup.svelte";
  import Copyright from "../components/Copyright.svelte";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { push } from "svelte-spa-router";
  import { getDbRoot, insertBody } from "../utils/dbUtils.js";
  import Toast from "../components/Toast.svelte";

  const isLandScape: boolean = window.innerWidth > window.innerHeight;
  const cardWidth: string = isLandScape ? "20vw" : "80vw";
  const cardHeight: string = isLandScape ? "60vh" : "23vh";

  firebase.auth().onAuthStateChanged((user: any): any => {
    if (!user) return push("/signin");
    sessionStorage.setItem("uid", user.uid);
    console.log("--- Firebase user is detected && uid is registered to session storage ---");
  });

  let titleValue: string = "無題のノート";

  window.addEventListener("DOMContentLoaded", async () => {
    console.log("--- DOM contents are loaded ---");
    const dbRoot: dbRoot = await getDbRoot();
    if (!dbRoot) return;
    const currentNote: any = dbRoot.current.data().current;
    if (!currentNote) return;
    titleValue = dbRoot.current.data()[currentNote].title;
    const currentNoteBody: string = dbRoot.current.data()[currentNote].body;
    insertBody(currentNoteBody);
  });

  const backSideCard = (): void => {
    const toolCard: HTMLElement | null = document.getElementById("tool_card");
    if (!toolCard) throw new Error("Tool card doesn't exist");
    toolCard.classList.remove("visible");
    const toBeInserted: HTMLElement | null = document.getElementById("to_be_inserted");
    if (!toBeInserted) throw new Error("toBeInserted div doesn't exist");
    toBeInserted.textContent = "";
  };
</script>

<HeaderLogo />
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
  <SideCard width="{cardWidth}" height="{cardHeight}">
    <div class="content" slot="content">
      <EditorButtonGroup />
      <CountGroup />
      {#if isLandScape}
        <ComingSoon />
      {/if}
    </div>
  </SideCard>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .header-container {
    position: fixed;
    padding: 20px 0px 0px 20px;
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
  }
  #to_be_inserted {
    @extend %center;
    height: calc(60vh - 90px);
    overflow-y: scroll;
  }

  @media (max-aspect-ratio: 1/1) {
    .header-container {
      width: 100vw;
      padding: 10px 0;
      position: relative;
    }
    .left-card {
      position: relative;
      height: 23vh;
      padding: 1vh 0;
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
        height: 23vh;
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

  @media screen and (max-width: 700px) and (max-aspect-ratio: 4/7) {
    .header-container {
      padding: 15px 0px;
    }
  }
</style>
