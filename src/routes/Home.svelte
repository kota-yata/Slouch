<script lang="ts">
  import HeaderLogo from "../components/HeaderLogo.svelte";
  import SideCard from "../components/SideCard.svelte";

  interface GenerateResponsiveSize {
    headerLogo: {
      width: string;
      height: string;
    };
    leftCard: {
      width: string;
      height: string;
    };
  }

  const GenerateResponsiveSize = (): GenerateResponsiveSize => {
    let returnedSizeObject: GenerateResponsiveSize = {
      headerLogo: {
        width: "150px",
        height: "48px",
      },
      leftCard: {
        width: "20vw",
        height: "60vh",
      },
    };
    return returnedSizeObject;
  };

  const responsiveSizeObj: GenerateResponsiveSize = GenerateResponsiveSize();
</script>

<div class="logo-in-upper-left">
  <HeaderLogo width="{responsiveSizeObj.headerLogo.width}" height="{responsiveSizeObj.headerLogo.height}" />
</div>
<div class="left-card">
  <SideCard width="{responsiveSizeObj.leftCard.width}" height="{responsiveSizeObj.leftCard.height}">
    <div slot="content">Hello</div>
  </SideCard>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .logo-in-upper-left {
    padding: 20px 0px 0px 20px;
  }
  .left-card {
    position: fixed;
    top: 15vh;
    left: 2vw;
  }
</style>
