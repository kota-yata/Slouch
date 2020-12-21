<script lang="ts">
</script>

<div class="profile-stuff"><span class="profile-stuff-email">example@gmail.com</span></div>

<style lang="scss">
  @import "../assets/definition.scss";

  .profile-stuff {
    @extend %center;
    width: 80%;
    overflow-x: visible;
    border-bottom: $slouch-border;
    padding: 10% 0;
    &-email {
      margin-left: 10px;
      font-weight: bold;
      font-size: 20px;
      color: $slouch-green;
      vertical-align: middle;
    }
  }
</style>
