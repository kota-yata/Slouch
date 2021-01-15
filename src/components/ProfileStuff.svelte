<script lang="ts">
</script>

<div class="profile-stuff">
  <label> <input type="text" name="title" placeholder="ノートのタイトル" value="無題のノート" /> </label>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .profile-stuff {
    @extend %center;
    width: 80%;
    border-bottom: $slouch-border;
    padding: 5% 0 3% 0;
    max-height: 6.5vh;
    overflow-y: scroll;
    input {
      @extend %center;
      font-weight: bold;
      font-size: 20px;
      color: $slouch-navy;
      vertical-align: middle;
      word-wrap: break-word;
    }
  }

  @media screen and (max-width: 1200px) {
    .profile-stuff {
      width: 90%;
      input {
        font-size: 13px;
      }
    }
  }
</style>
