<script lang="ts">
  import Google from "./svgComponents/Google.svelte";
  import GitHub from "./svgComponents/GitHub.svelte";

  type iconToImport = "google" | "github";

  export let id: string;
  export let iconToImport: iconToImport;
  export let title: string;
  export let onclick: any;
</script>

<button class="auth-button {iconToImport}" id="{id}" on:click="{onclick}">
  <span class="auth-button-icon">
    {#if iconToImport === 'google'}
      <Google />
    {:else if iconToImport === 'github'}
      <GitHub />
    {/if}
  </span>
  <span class="auth-button-title">{title}</span>
</button>

<style lang="scss">
  @import "../assets/definition.scss";
  .auth-button {
    @extend %center;
    display: flex;
    width: 200px;
    height: 50px;
    background: $complete-white;
    box-shadow: 2px 2px 5px $shadow-white, -2px -2px 5px $general-white;
    border-radius: 2px;
    transition: 0.2s;
    &-icon,
    &-title {
      display: flex;
      align-items: center;
      vertical-align: middle;
      justify-content: center;
      height: 100%;
    }
    &-icon {
      width: 40px;
    }
    &-title {
      width: 160px;
      font-family: "inter";
      font-size: 15px;
      // Googleのガイドラインに沿ったスタイルに統一する
      color: #000000;
      opacity: 0.54;
    }
    &:hover {
      box-shadow: 1px 1px 3px $shadow-white, -1px -1px 3px $general-white;
      transition: 0.2s;
    }
  }
</style>
