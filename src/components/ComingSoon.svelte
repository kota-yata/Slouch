<script lang="ts">
  // DOMが全部読み込まれた後にLazyloadでPainting-Rocketを読みこむ
  window.addEventListener("DOMContentLoaded", () => {
    lazyload();
  });
</script>

<div class="coming-soon">
  <div class="coming-soon-sentence">Coming soon...</div>
  <img class="coming-soon-img lazyload" alt="painting-rocket" data-src="./img/painting-rocket.png" />
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .coming-soon {
    @extend %center;
    &-sentence {
      padding: 5% 0;
      font-weight: bold;
      font-size: 20px;
      color: $slouch-green;
    }
    &-img {
      width: 60%;
    }
  }

  @media screen and (max-width: 1200px) {
    .coming-soon {
      &-sentence {
        padding: 2vh 0;
        font-size: 15px;
      }
    }
  }
</style>
