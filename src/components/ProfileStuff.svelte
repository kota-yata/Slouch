<script lang="ts">
  import firebase from "firebase/app";
  import "firebase/auth";
  let emailAddress = "No email address";
  firebase.auth().onAuthStateChanged((user: any) => {
    if (!user) return;
    emailAddress = user.email;
  });
</script>

<div class="profile-stuff"><span id="email_address" class="profile-stuff-email">{emailAddress}</span></div>

<style lang="scss">
  @import "../assets/definition.scss";

  .profile-stuff {
    @extend %center;
    width: 80%;
    border-bottom: $slouch-border;
    padding: 5% 0;
    max-height: 6.5vh;
    overflow-y: scroll;
    &-email {
      font-weight: bold;
      font-size: 20px;
      color: $slouch-green;
      vertical-align: middle;
      word-wrap: break-word;
    }
  }

  @media screen and (max-width: 1200px) {
    .profile-stuff {
      width: 90%;
      &-email {
        font-size: 13px;
      }
    }
  }
</style>
