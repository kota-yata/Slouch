<script lang="ts">
  const formatIconArray = ["bold", "italic", "underline"];
</script>

<div class="format-icon-group">
  {#each formatIconArray as string, i}<button class="fas fa-{string}"></button>{/each}
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .format-icon-group {
    @extend %center;
    padding: 10% 0;
    width: 70%;
    border-bottom: $slouch-border;
    button {
      @extend %center;
      background: transparent;
      padding: 20px;
      margin-left: 5px;
      margin-right: 5px;
      transition: 0.1s;
      font-size: 20px;
      color: $slouch-navy;
      border-radius: 10px;
      &:hover {
        background: $general-white;
        transition: 0.1s;
      }
    }
  }
</style>
