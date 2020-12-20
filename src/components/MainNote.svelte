<script lang="ts">
  export let width: string;
  export let height: string;
</script>

<textarea class="main-note" style="width:{width}; height:{height};"></textarea>

<style lang="scss">
  @import "../assets/definition.scss";

  .main-note {
    background: $complete-white;
    font-family: "nsjp", sans-serif;
    resize: none;
    padding: $center-note-padding;
  }
</style>
