<script lang="ts">
  // DOMが全部読み込まれた後にLazyloadでPainting-Rocketを読みこむ
  window.addEventListener("DOMContentLoaded", () => {
    lazyload();
  });
</script>

<div class="coming-soon">
  <div class="coming-soon-sentence">New feature will come soon...</div>
  <img class="coming-soon-img lazyload" alt="painting-rocket" data-src="./img/painting-rocket.png" />
</div>

<style lang="scss">
  @import "../assets/definition.scss";

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
</style>
