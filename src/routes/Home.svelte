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

  interface GenerateResponsiveSize {
    headerLogo: {
      width: string;
      height: string;
    };
  }

  // innerWidthに対応した各コンポーネントのサイズを返す
  // 現状SvelteでSVGをSCSSからいじる方法はないのでTSでどうにかする
  const GenerateResponsiveSize = (): GenerateResponsiveSize => {
    let returnedSizeObject: GenerateResponsiveSize = {
      headerLogo: {
        width: "150px",
        height: "48px",
      },
    };
    return returnedSizeObject;
  };

  const responsiveSizeObj: GenerateResponsiveSize = GenerateResponsiveSize();
</script>

<HeaderLogo width="{responsiveSizeObj.headerLogo.width}" height="{responsiveSizeObj.headerLogo.height}" />
<div class="left-card side-card">
  <SideCard>
    <div slot="content">
      <EditorButtonGroup />
      <FormatIconGroup />
      <ComingSoon />
    </div>
  </SideCard>
</div>
<div class="note-container">
  <CenterNote />
</div>
<div class="right-card side-card">
  <SideCard>
    <div slot="content">
      <ProfileStuff />
      <FileButtonGroup />
      <Copyright />
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
