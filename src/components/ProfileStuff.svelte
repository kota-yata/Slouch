<script lang="ts">
</script>

<div class="profile-stuff">
  <img class="profile-stuff-img" alt="profile-stuff-img" src="./img/example.png" />
  <span class="profile-stuff-email">example@gmail.com</span>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .profile-stuff {
    padding: 10% 0;
    &-img {
      width: 10%;
      border-radius: 50%;
      border: 3px $slouch-green solid;
      vertical-align: middle;
    }
    &-email {
      margin-left: 10px;
      font-weight: bold;
      font-size: 20px;
      color: $slouch-green;
      vertical-align: middle;
    }
  }
</style>
