<script lang="ts">
  import FormatIconGroup from "../components/FormatIconGroup.svelte";
  import HeaderLogo from "../components/HeaderLogo.svelte";
  import MainNote from "../components/MainNote.svelte";
  import ProfileStuff from "../components/ProfileStuff.svelte";
  import SideCard from "../components/SideCard.svelte";

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

<div class="logo-in-upper-left">
  <HeaderLogo width="{responsiveSizeObj.headerLogo.width}" height="{responsiveSizeObj.headerLogo.height}" />
</div>
<div class="left-card side-card">
  <SideCard width="{responsiveSizeObj.sideCard.width}" height="{responsiveSizeObj.sideCard.height}">
    <div slot="content">
      <div class="format-icon-group-container">
        <FormatIconGroup />
      </div>
      <div class="coming-soon">
        <div class="coming-soon-sentence">New feature will come soon...</div>
        <img class="coming-soon-img" alt="painting-rocket" src="./img/painting-rocket.png" />
      </div>
    </div>
  </SideCard>
</div>
<div class="center-textarea">
  <MainNote width="{responsiveSizeObj.centerNote.width}" height="{responsiveSizeObj.centerNote.height}" />
</div>
<div class="right-card side-card">
  <SideCard width="{responsiveSizeObj.sideCard.width}" height="{responsiveSizeObj.sideCard.height}">
    <div slot="content">
      <div class="profile-stuff-container">
        <ProfileStuff />
      </div>
    </div>
  </SideCard>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .logo-in-upper-left {
    position: fixed;
    padding: 20px 0px 0px 20px;
  }
  .side-card {
    position: fixed;
    top: calc(
      50% - #{$left-card-height} / 2
    ); // カードの高さ/2をページの高さ/2から引き、それをカード最上部の位置にすればカードは上下でセンタリングされる
  }
  .center-textarea {
    position: absolute;
    top: calc(
      50% - #{$center-note-height} / 2 - #{$center-note-padding}
    ); // ページの高さ/2 - カードの高さ/2 - paddingで上下センタリングされる
    left: calc(
      50% - #{$center-note-height} * #{$A4RATIO} / 2 - #{$center-note-padding}
    ); // A4サイズ(1:1.414)に横幅を合わせ、ページの横幅/2 - テキストエリアの横幅/2 - paddingで左右センタリングする
  }
  .left-card {
    left: 2vw;
    .format-icon-group-container {
      @extend %center;
      width: 80%;
      border-bottom: $slouch-border;
    }
    .coming-soon {
      @extend %center;
      margin-top: 10%;
      &-sentence {
        font-weight: bold;
        font-size: 20px;
        color: $slouch-green;
      }
      &-img {
        margin-top: 10px;
        width: 80%;
      }
    }
  }
  .right-card {
    right: 2vw;
    .profile-stuff-container {
      @extend %center;
      width: 80%;
      overflow-x: visible;
      border-bottom: $slouch-border;
    }
  }
</style>
