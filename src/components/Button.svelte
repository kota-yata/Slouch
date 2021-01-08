<script lang="ts">
  export let title: string;
  export let onclick: any = "";
</script>

<button class="button" on:click="{onclick}">{title}</button>

<style lang="scss">
  @import "../assets/definition.scss";
  .button {
    border-radius: 5px;
    background: $slouch-green;
    font-family: "nsjp";
    font-weight: bold;
    color: $complete-white;
    padding: 10px;
    box-shadow: 2px 2px 5px $shadow-white, -2px -2px 5px $general-white;
    transition: 0.1s;
    &:hover {
      background: $slouch-deep-green;
      transition: 0.1s;
    }
  }
</style>
