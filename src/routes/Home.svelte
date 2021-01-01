<script lang="ts">
  import ComingSoon from "../components/ComingSoon.svelte";
  import FormatIconGroup from "../components/FormatIconGroup.svelte";
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import CenterNote from "../components/CenterNote.svelte";
  import ProfileStuff from "../components/ProfileStuff.svelte";
  import SideCard from "../components/SideCard.svelte";
  import FileButtonGroup from "../components/FileButtonGroup.svelte";
  import EditorButtonGroup from "../components/EditorButtonGroup.svelte";
  import Copyright from "../components/Copyright.svelte";

  const isLandScape: boolean = window.innerWidth > window.innerHeight;
  const cardWidth: string = isLandScape ? "20vw" : "80vw";
  const cardHeight: string = isLandScape ? "60vh" : "23vh";
</script>

<div class="header-container">
  <HeaderLogo />
</div>
<div class="right-card side-card">
  <SideCard width="{cardWidth}">
    <div slot="content">
      <ProfileStuff />
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
      <FormatIconGroup />
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
  .right-card {
    z-index: 5;
    right: 2vw;
  }

  @media (max-aspect-ratio: 1/1) {
    .header-container {
      width: 100vw;
      padding: 20px 0;
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
</style>
