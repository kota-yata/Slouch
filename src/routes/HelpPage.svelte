<script lang="ts">
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import HelpFolder from "../components/svgComponents/HelpFolder.svelte";
  import HelpNotebook from "../components/svgComponents/HelpNotebook.svelte";
</script>

<div class="help-body">
  <div class="help-top-title">
    <h1>SLOUCHを使いこなそう</h1>
  </div>
  <div class="help-section help-section-green">
    <div class="help-section-text">
      <h1>ノートを書く</h1>
      <p>SLOUCHでは、ログイン後すぐにノートを書き始めることができます。</p>
    </div>
    <div class="help-section-img">
      <HelpNotebook />
    </div>
  </div>
  <div class="help-section help-section-white">
    <div class="help-section-text">
      <h1>ノートを書く</h1>
      <p>SLOUCHでは、ログイン後すぐにノートを書き始めることができます。</p>
    </div>
    <div class="help-section-img">
      <HelpFolder />
    </div>
  </div>
  <div class="help-section help-section-green">
    <div class="help-section-text">
      <h1>ノートを書く</h1>
      <p>SLOUCHでは、ログイン後すぐにノートを書き始めることができます。</p>
    </div>
    <div class="help-section-img">
      <HelpNotebook />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .help-body {
    background: $slouch-green;
    height: 100%;
    .help-top-title {
      @extend %center;
      margin: 0;
      padding: 50px 0px 10px 0px;
      h1 {
        color: $complete-white;
        font-family: "dosis", "corp";
        font-size: 50px;
      }
    }
    .help-section {
      margin: 0;
      width: 100vw;
      min-height: 40vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 25%);
      overflow: visible;
      &-text {
        padding: 20px;
        text-align: left;
        h1 {
          color: $complete-white;
          font-family: "corp";
          font-size: 40px;
          line-height: 1.8;
          border-bottom: 2px $shadow-white solid;
        }
        p {
          font-family: "nsjp";
          font-weight: bold;
          color: $slouch-navy;
        }
      }
      &-img {
        padding: 30px 20px;
      }
    }
    .help-section-green {
      background: $slouch-green;
    }
    .help-section-white {
      background: $general-white;
      h1 {
        color: $slouch-green;
        border-bottom: 2px $slouch-green solid;
      }
    }
  }
</style>
