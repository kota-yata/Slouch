<div class="format-icon-group">
  <button><span class="material-icons">format_bold</span></button>
  <button><span class="material-icons">format_italic</span></button>
  <button><span class="material-icons">format_underlined</span></button>
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
      cursor: pointer;
      background: transparent;
      width: 20%;
      height: 20%;
      transition: 0.1s;
      .material-icons {
        color: $general-black;
        font-size: 30px;
      }
      &:hover {
        background: $general-white;
        transition: 0.1s;
      }
    }
  }
</style>
