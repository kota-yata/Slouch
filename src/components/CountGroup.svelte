<script lang="ts">
</script>

<div class="count-group">
  <!--<p class="char-count"><span class="count-number" id="char_number">0</span> 文字</p>-->
  <!--<p class="words-count"><span class="count-number" id="words_number">0</span> 単語</p>-->
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .count-group {
    @extend %center;
    padding: 10% 0;
    width: 80%;
    border-bottom: $slouch-border;
    display: flex;
    justify-content: center;
    p {
      font-size: 15px;
      font-family: "dosis", "nsjp";
      font-weight: 700;
      color: $slouch-navy;
      padding: 0 30px;
      .count-number {
        font-size: 25px;
        color: $slouch-green;
        padding-right: 5px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .count-group {
      padding: 5% 0;
    }
  }

  @media (max-aspect-ratio: 1/1) {
    .count-group {
      padding: 4% 0;
      border-bottom: none;
    }
  }
</style>
