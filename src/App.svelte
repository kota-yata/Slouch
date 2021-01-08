<script>
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import SignIn from "./routes/SignIn.svelte";
  import PrivacyPolicy from "./routes/PrivacyPolicy.svelte";
  import { setUpFirebase } from "./components/Firebase.svelte";
  import "firebase/auth";
  import TermOfUse from "./routes/TermOfUse.svelte";

  setUpFirebase();

  const routes = {
    "/": Home,
    "/signin/": SignIn,
    "/privacy-policy": PrivacyPolicy,
    "/term-of-use": TermOfUse,
  };
</script>

<main>
  <Router routes="{routes}" />
</main>

<style lang="scss">
  @import "./assets/definition.scss";

  main {
    width: 100vw;
    height: 100vh;
    font-family: "dosis", "nsjp", Arial, sans-serif;
    color: $general-black;
  }
</style>
