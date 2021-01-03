<script lang="ts">
  import { link } from "svelte-spa-router";
  import AuthButton from "../components/AuthButton.svelte";
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import SignInStories from "../components/svgComponents/SignInStories.svelte";
</script>

<div class="logo-container">
  <HeaderLogo />
</div>
<div class="screen-division-container">
  <div class="left-container screen-division">
    <div class="text-editor-for-memorizing">おかえりなさい</div>
    <div class="auth-button-container">
      <div>
        <AuthButton id="in_google" iconToImport="google" title="Sign in with Google" />
      </div>
      <div>
        <AuthButton id="in_github" iconToImport="github" title="Sign in with Github" />
      </div>
      <div class="jump-page"><a href="/signup" use:link>アカウントを作る</a></div>
    </div>
  </div>
  <div class="right-container screen-division">
    <div>
      <SignInStories />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../assets/authCommonStyles.scss";
</style>
