<script lang="ts">
  import { link } from "svelte-spa-router";
  import AuthButton from "../components/AuthButton.svelte";
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import SignUpStories from "../components/svgComponents/SignUpStories.svelte";
</script>

<div class="logo-container">
  <HeaderLogo />
</div>
<div class="screen-division-container">
  <div class="left-container screen-division">
    <div class="text-editor-for-memorizing">ようこそ、青二才</div>
    <div class="auth-button-container">
      <div>
        <AuthButton id="up_google" iconToImport="google" title="Sign up with Google" />
      </div>
      <div>
        <AuthButton id="up_github" iconToImport="github" title="Sign up with Github" />
      </div>
      <div class="jump-page"><a href="/signin" use:link>ログインする</a></div>
    </div>
  </div>
  <div class="right-container screen-division">
    <div>
      <SignUpStories />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../assets/authCommonStyles.scss";
</style>
