<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div class="rightcard-copyright">
  <div class="terms">
    <a href="/privacy-policy" use:link>プライバシーポリシー</a>
    ・<a href="/term-of-use" use:link>利用規約</a>
  </div>
  <div>© 2021 Kota Yatagai</div>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .rightcard-copyright {
    @extend %center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    div {
      color: $slouch-green;
      font-weight: bold;
      font-size: 15px;
    }
    .terms {
      font-size: 10px;
      margin-bottom: 5px;
    }
  }
</style>
