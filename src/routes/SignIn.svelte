<script lang="ts">
  import firebase from "firebase/app";
  import "firebase/auth";
  import { push, link } from "svelte-spa-router";
  import AuthButton from "../components/AuthButton.svelte";
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import SignInStories from "../components/svgComponents/SignInStories.svelte";

  interface provider {
    Hb: any;
    Pc: any;
    a: any[];
    isOAuthProvider: boolean;
    nb: any;
    ob: any;
    providerId: string;
  }

  const providerGithub: provider = new firebase.auth.GithubAuthProvider();
  const providerGoogle: provider = new firebase.auth.GoogleAuthProvider();

  const checkFirebaseStatus = (): void => {
    firebase.auth().onAuthStateChanged(function (user: any) {
      if (user) {
        push("/");
        console.log("success!");
      }
    });
  };

  const signInWithGitHub = (): void => {
    firebase.auth().signInWithRedirect(providerGithub);
  };
  const signInWithGoogle = (): void => {
    firebase.auth().signInWithRedirect(providerGoogle);
  };

  window.addEventListener("DOMContentLoaded", (): void => {
    checkFirebaseStatus();
  });
</script>

<div class="logo-container">
  <HeaderLogo />
</div>
<div class="screen-division-container">
  <div class="left-container screen-division">
    <div class="text-editor-for-memorizing">ようこそ。</div>
    <div class="auth-button-container">
      <div>
        <AuthButton id="in_google" iconToImport="google" title="Sign in with Google" onclick="{signInWithGoogle}" />
      </div>
      <div>
        <AuthButton id="in_github" iconToImport="github" title="Sign in with Github" onclick="{signInWithGitHub}" />
      </div>
      <div><a href="/privacy-policy" use:link>プライバシーポリシー</a></div>
    </div>
  </div>
  <div class="right-container screen-division">
    <div>
      <SignInStories />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .logo-container {
    position: fixed;
    padding: 20px 0px 0px 20px;
  }
  .screen-division-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    .screen-division {
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 45vw;
      height: 70vh;
    }
    .left-container {
      margin-left: 5vw;
      .text-editor-for-memorizing {
        @extend %center;
        font-family: "corp";
        font-size: 60px;
        color: $slouch-green;
      }
      .auth-button-container {
        padding: 5vh 0;
        div {
          @extend %center;
          margin-top: 5vh;
        }
      }
    }
    .right-container {
      margin-right: 5vw;
    }
  }

  @media screen and (max-width: 700px) {
    .screen-division-container {
      display: block;
      .screen-division {
        width: 100vw;
        height: auto;
        margin: 0;
        padding: 0;
      }
      .left-container {
        padding-top: 100px;
        .text-editor-for-memorizing {
          font-size: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 700px) and (min-aspect-ratio: 5/9) {
    .screen-division-container {
      .left-container {
        .text-editor-for-memorizing {
          font-size: 40px;
        }
        .auth-button-container {
          padding: 0;
        }
      }
    }
  }

  @media screen and (max-width: 700px) and (min-aspect-ratio: 5/7) {
    .screen-division-container {
      .left-container {
        padding-top: 80px;
      }
    }
  }
</style>
