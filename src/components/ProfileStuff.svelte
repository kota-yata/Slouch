<script lang="ts">
</script>

<div class="profile-stuff">
  <span class="profile-stuff-email">super.long.address.he.is.no.longer.with.us@gmail.com</span>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .profile-stuff {
    @extend %center;
    width: 80%;
    border-bottom: $slouch-border;
    padding: 5% 0;
    &-email {
      font-weight: bold;
      font-size: 20px;
      color: $slouch-green;
      vertical-align: middle;
      word-wrap: break-word;
    }
  }

  @media screen and (max-width: 1200px) {
    .profile-stuff {
      width: 90%;
      max-height: 8vh;
      overflow-y: scroll;
      &-email {
        font-size: 13px;
      }
    }
  }
</style>
