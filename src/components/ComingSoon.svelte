<script lang="ts">
  import Rocket from "./svgComponents/Rocket.svelte";
</script>

<div class="coming-soon">
  <div class="coming-soon-sentence">Coming soon...</div>
  <div>
    <Rocket />
  </div>
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
