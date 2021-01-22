<script lang="ts">
  import { getDbRoot } from "../utils/dbUtils";
  import { fireToast } from "../utils/fireToast";
  export let titleValue: string = "無題のノート";

  const saveTitle = async (titleValue: string) => {
    const dbRoot: dbRoot = await getDbRoot();
    const currentNote: any = dbRoot.current.data().current;
    if (!currentNote) return;
    dbRoot.uRoot.update({
      [`${currentNote}.title`]: titleValue,
    });
    console.log("--- New title was saved ---");
    fireToast("タイトルが保存されました");
  };
</script>

<div class="profile-stuff">
  <div id="title_input_container">
    <label>
      <input type="text" name="title" placeholder="ノートのタイトル" id="note_title" bind:value="{titleValue}" />
    </label>
    <button
      id="title_save"
      on:click="{() => {
        saveTitle(titleValue);
      }}"
    >保存</button>
  </div>
</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .profile-stuff {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: $slouch-border;
    margin: 0 auto;
    padding: 5%;
    max-height: 6.5vh;
    overflow-y: scroll;
    #title_input_container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px $slouch-green solid;
      border-radius: 5px;
      label {
        width: 70%;
        input {
          width: calc(100% - 5px);
          padding-left: 5px;
          font-weight: bold;
          font-size: 15px;
          color: $slouch-navy;
          word-break: keep-all;
          overflow-x: scroll;
          &::placeholder {
            color: $shadow-navy;
          }
        }
      }
      #title_save {
        width: 30%;
        padding: 10px;
        background: $slouch-green;
        color: $complete-white;
        font-family: "nsjp";
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .profile-stuff {
      width: 90%;
      input {
        font-size: 13px;
      }
    }
  }
</style>
