<script>
  import Bold from "../assets/svgs/format-bold.svg";
  import Italic from "../assets/svgs/format-italic.svg";
  import Underline from "../assets/svgs/format-underline.svg";

  export let width = "100%";
  export let height = "100%";
</script>

<div class="format-icon-group">
  <button><Bold width="{width}" height="{height}" /></button>
  <button><Italic width="{width}" height="{height}" /></button>
  <button><Underline width="{width}" height="{height}" /></button>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .format-icon-group {
    padding: 20% 0;
    button {
      @extend %center;
      cursor: pointer;
      background: transparent;
      width: 20%;
      height: 20%;
      transition: 0.1s;
      &:hover {
        background: $general-white;
        transition: 0.1s;
      }
    }
  }
</style>
