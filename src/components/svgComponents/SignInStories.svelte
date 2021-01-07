<script>
  import Stories from "../../assets/svgs/signin.svg";
  import Learning from "../../assets/svgs/learning.svg";
  export let width = window.innerWidth > 700 ? "40vw" : "60vw";
  export let height = width;

  const array = [Stories, Learning];
  const randomNum = Math.floor(Math.random() * 2);
  console.log(randomNum);
</script>

<div class="signin-stories-container">
  <svelte:component this="{array[randomNum]}" width="{width}" height="{height}" />
</div>
