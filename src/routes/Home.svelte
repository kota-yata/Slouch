<script lang="ts">
  import ComingSoon from "../components/ComingSoon.svelte";
  import FormatIconGroup from "../components/FormatIconGroup.svelte";
  import HeaderLogo from "../components/HeaderLogo.svelte";
  import CenterNote from "../components/CenterNote.svelte";
  import ProfileStuff from "../components/ProfileStuff.svelte";
  import SideCard from "../components/SideCard.svelte";
  import FileButtonGroup from "../components/FileButtonGroup.svelte";

  interface GenerateResponsiveSize {
    headerLogo: {
      width: string;
      height: string;
    };
    sideCard: {
      width: string;
      height: string;
    };
    centerNote: {
      width: string;
      height: string;
    };
  }

  // innerWidthに対応した各コンポーネントのサイズを返す
  const GenerateResponsiveSize = (): GenerateResponsiveSize => {
    const sideNoteWidth: string = "20vw";
    const centerNoteHeight: string = "80vh";
    const A4RATIO: string = "1 / 1.414";

    let returnedSizeObject: GenerateResponsiveSize = {
      headerLogo: {
        width: "150px",
        height: "48px",
      },
      sideCard: {
        width: sideNoteWidth,
        height: "60vh",
      },
      centerNote: {
        width: `calc(${centerNoteHeight} * ${A4RATIO})`,
        height: centerNoteHeight,
      },
    };
    return returnedSizeObject;
  };

  const responsiveSizeObj: GenerateResponsiveSize = GenerateResponsiveSize();
</script>

<HeaderLogo width="{responsiveSizeObj.headerLogo.width}" height="{responsiveSizeObj.headerLogo.height}" />
<div class="left-card side-card">
  <SideCard width="{responsiveSizeObj.sideCard.width}" height="{responsiveSizeObj.sideCard.height}">
    <div slot="content">
      <FormatIconGroup />
      <ComingSoon />
    </div>
  </SideCard>
</div>
<div class="note-container">
  <CenterNote width="{responsiveSizeObj.centerNote.width}" height="{responsiveSizeObj.centerNote.height}" />
</div>
<div class="right-card side-card">
  <SideCard width="{responsiveSizeObj.sideCard.width}" height="{responsiveSizeObj.sideCard.height}">
    <div slot="content">
      <ProfileStuff />
      <FileButtonGroup />
    </div>
  </SideCard>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

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
    right: 2vw;
  }
</style>
