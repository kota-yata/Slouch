<script>
  import Logo from "../../assets/svgs/logoonly.svg"; // このSVG読込のエラーが消えなかったため、解決策が見つかるまでこのコンポーネントはTSではなくJSで書く
  export let width = window.innerWidth > window.innerHeight ? "150px" : "100px";
  export let height = window.innerWidth > window.innerHeight ? "48px" : "32px";
</script>

<div class="header-logo-container">
  <Logo width="{width}" height="{height}" />
</div>

<style lang="scss">
  @import "../../assets/definition.scss";

  .header-logo-container {
    @extend %center;
  }
</style>
