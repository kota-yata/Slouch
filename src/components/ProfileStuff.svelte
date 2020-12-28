<script lang="ts">
</script>

<div class="profile-stuff">
  <span
    class="profile-stuff-email"
  >super.long.address.he.is.no.longer.with.us.from.tomorrow.come.on.bro@gmail.com</span>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .profile-stuff {
    @extend %center;
    width: 80%;
    overflow-x: visible;
    border-bottom: $slouch-border;
    padding: 5% 0;
    &-email {
      margin-left: 10px;
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
      &-email {
        font-size: 13px;
      }
    }
  }
</style>
