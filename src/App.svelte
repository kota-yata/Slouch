<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import SignUp from "./routes/SignUp.svelte";
  import SignIn from "./routes/SignIn.svelte";

  const routes = {
    "/": Home,
    "/signup/": SignUp,
    "/signin/": SignIn,
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
