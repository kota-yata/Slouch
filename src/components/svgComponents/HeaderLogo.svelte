<script>
  import Logo from "../../assets/svgs/logoonly.svg"; // このSVG読込のエラーが消えなかったため、解決策が見つかるまでこのコンポーネントはTSではなくJSで書く
  export let width;
  export let height;
</script>

<div class="header-logo-container">
  <Logo width="{width}" height="{height}" />
</div>

<style lang="scss">
  .header-logo-container {
    position: fixed;
    padding: 20px 0px 0px 20px;
  }
</style>
