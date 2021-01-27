<script>
  import Logo from "../../assets/svgs/logoonly.svg"; // このSVG読込のエラーが消えなかったため、解決策が見つかるまでこのコンポーネントはTSではなくJSで書く
  export let width = window.innerWidth > window.innerHeight ? "150px" : "100px";
  export let height = window.innerWidth > window.innerHeight ? "48px" : "32px";
</script>

<header class="header-logo-container" aria-label="ヘッダー">
  <Logo width="{width}" height="{height}" />
</header>

<style lang="scss">
  @import "../../assets/definition.scss";

  .header-logo-container {
    @extend %center;
    position: fixed;
    padding: 20px 0px 0px 20px;
  }
  @media (max-aspect-ratio: 1/1) {
    .header-logo-container {
      position: relative;
      padding: 20px 0;
    }
  }
</style>
