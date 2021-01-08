<script lang="ts">
  export let title: string;
  export let icon: string;
  export let sentence: string;

  const breaked: string[] = sentence.split("<br />");
</script>

<div class="privacy-policy-contents">
  <div class="section">
    <h2><i class="fas fa-{icon}"></i>{title}</h2>
  </div>
  <div class="words">
    {#each breaked as words, i}<span>{words}</span><br />{/each}
  </div>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .privacy-policy-contents {
    text-align: left;
    margin: 0 auto;
    margin-top: 30px;
    width: 65vw;
    max-width: 900px;
    padding: 10px 0 40px 0;
    background: $complete-white;
    box-shadow: 2px 2px 5px $shadow-white, -2px -2px 5px $general-white;
    border-radius: 17px;
    color: $general-black;
    .section {
      padding: 5px 20px;
      color: $slouch-green;
      h2 {
        font-size: 25px;
        color: $general-black;
        i {
          font-size: 40px;
          color: $slouch-green;
          padding-right: 10px;
        }
      }
    }
    .words {
      padding: 0px 25px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 800px) {
    .privacy-policy-contents {
      width: 85vw;
      max-width: 85vw;
      .section {
        padding: 5px 15px;
        h2 {
          font-size: 18px;
          i {
            font-size: 22px;
            padding-right: 5px;
          }
        }
      }
      .words {
        font-size: 15px;
      }
    }
  }
</style>
