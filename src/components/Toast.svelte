<script lang="ts">
</script>

<div class="toast" id="toast">
  <div class="toast-icon"><i class="fas fa-check"></i></div>
  <div class="toast-words" id="toast_words">正常に保存されました！</div>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: $slouch-green;
    font-family: "nsjp";
    font-weight: bold;
    font-size: 15px;
    color: $complete-white;
    padding: 10px;
    box-shadow: 2px 2px 5px $shadow-white, -2px -2px 5px $general-white;
    visibility: hidden;
    transition: 0.3s;
    &-icon {
      margin-right: 10px;
      height: 30px;
      width: 30px;
      font-size: 18px;
      border: 3px $complete-white solid;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
