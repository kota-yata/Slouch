<script lang="ts">
  interface formatIconObject {
    name: string;
    tooltip: string;
  }
  const formatIconObject: formatIconObject[] = [
    {
      name: "bold",
      tooltip: "Ctrl + b",
    },
    {
      name: "italic",
      tooltip: "Ctrl + i",
    },
    {
      name: "underline",
      tooltip: "Ctrl + u",
    },
  ];
</script>

<div class="format-icon-group">
  {#each formatIconObject as { name, tooltip }, i}
    <button data-tooltip="{tooltip}"><i class="fas fa-{name}"></i></button>
  {/each}
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .format-icon-group {
    @extend %center;
    padding: 10% 0;
    width: 80%;
    border-bottom: $slouch-border;
    button {
      @extend %center;
      background: transparent;
      padding: 15px;
      margin-left: 5px;
      margin-right: 5px;
      transition: 0.1s;
      font-size: 20px;
      color: $slouch-navy;
      border-radius: 10px;
      &:hover {
        background: $general-white;
        transition: 0.1s;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .format-icon-group {
      padding: 5% 0;
      button {
        padding: 13px;
        font-size: 15px;
      }
    }
  }

  @media (max-aspect-ratio: 1/1) {
    .format-icon-group {
      padding: 4% 0;
      border-bottom: none;
    }
  }
</style>
