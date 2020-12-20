<script lang="ts">
  export let width: string;
  export let height: string;
</script>

<div class="side-card" style="width:{width}; height:{height};">
  <slot name="content">No content</slot>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .side-card {
    background: $complete-white;
    box-shadow: 2px 2px 5px $shadow-white, -2px -2px 5px $general-white;
    border-radius: 17px;
  }
</style>
