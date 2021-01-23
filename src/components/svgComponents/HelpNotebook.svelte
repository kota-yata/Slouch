<script>
  import Notebook from "../../assets/svgs/help-notebook.svg";
  export let width = "30vw";
</script>

<span>
  <Notebook width="{width}" />
  <a href="https://storyset.com/work">Illustration by Freepik Storyset</a>
</span>

<style lang="scss">
  @import "../../assets/definition.scss";
  span {
    position: relative;
    a {
      position: absolute;
      right: 100px;
      bottom: 50px;
      color: $slouch-navy;
      font-size: 10px;
      opacity: 0.3;
    }
  }
</style>
