<script lang="ts">
  export let width: string = "20vw";
  export let height: string = "60vh";
  export let id: string = "";
</script>

<div class="side-card" id="{id}" style="width:{width}; height:{height};">
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
