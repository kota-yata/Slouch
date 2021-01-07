<script lang="ts">
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import Button from "../components/Button.svelte";
  import { push } from "svelte-spa-router";

  document.title = "プライバシーポリシー - SLOUCH";

  const backToHome = (): void => {
    push("/");
  };
</script>

<div class="logo-container">
  <a href="https://slouch.dev"><HeaderLogo /></a>
</div>
<div class="privacy-policy">
  <div class="privacy-policy-title">
    <h1><i class="fas fa-user-shield"></i> プライバシーポリシー</h1>
  </div>
  <div class="privacy-policy-intro">
    SLOUCHの提供するサービスの利用者（以下「ユーザー」という）に関する個人情報を含んだ情報（以下「ユーザー情報」という）の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」という）を定めます。
    本ポリシーは、SLOUCHが提供する各種サービスごとに定めるプライバシーポリシー、その他関連する規程とともに、SLOUCHが提供する全てのサービス（以下「本サービス」という）に適用されるものとします。
  </div>
  <div class="privacy-policy-contents">
    <div class="section">
      <h2><i class="fas fa-user-astronaut"></i> 個人情報について</h2>
    </div>
    <div class="words">
      SLOUCHは、本サービス利用にあたってユーザーが外部サービスとの連携を許可した場合（Googleアカウント、GitHubアカウントでのログイン等）、
      その外部サービスでユーザーが利用するID、メールアドレス、その他外部サービスのプライバシー設定によりユーザーが連携先に開示を認めた情報を取得します。<br
      />
      また、アプリケーション改善のために、ユーザーのサービス利用履歴を取得することがあります。<br />
      なお、提供された個人情報は、ご本人の同意を得ている場合や法令にもとづく場合、個人データの取扱いを外部に委託する場合等を除き第三者に提供することはいたしません。利用者は、サービスの利用を以てこの情報の取り扱いに同意するものとします。
    </div>
  </div>
  <div class="privacy-policy-contents">
    <div class="section">
      <h2><i class="fas fa-ghost"></i> 免責事項</h2>
    </div>
    <div class="words">
      SLOUCHが提供するマークダウンエディタは基本無料で利用可能ですが、本サービスを用いて作成された文書、その他本サービスの利用により発生したいかなる損害について開発者/運営者は責任を負いかねます。<br
      />
      エディタの編集・プレビュー画面等ユーザー記入部、本サービスを用いて作成された文書に関する責任は全てその入力者に帰属します。<br
      />
      また、本サービスからのリンクなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
    </div>
  </div>
  <div class="privacy-policy-contents">
    <div class="section">
      <h2><i class="fas fa-chart-pie"></i> Google Analyticsについて</h2>
    </div>
    <div class="words">
      SLOUCHではサービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle
      Analyticsを利用した計測を行っています。
      、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。
      トラフィックデータは匿名で収集されており、個人を特定するものではありません。GoogleAnalyticsの利用規約及びプライバシーポリシーに関する説明については、
      Google Analyticsのサイトをご覧ください。<br />
      <li><a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Google Analytics利用規約</a></li>
      <li><a href="https://policies.google.com/privacy?hl=ja">Google プライバシーポリシー</a></li>
    </div>
  </div>
  <div class="privacy-policy-contents">
    <div class="section">
      <h2><i class="fas fa-paragraph"></i> プライバシーポリシーの変更</h2>
    </div>
    <div class="words">
      SLOUCHは必要に応じて、このプライバシーポリシーの内容を変更します。本規約は予告なく変更される場合がありますが、利用者はこのページで開示される最新のプライバシーポリシーに同意するものとします。
    </div>
  </div>
</div>
<div class="back-button-container">
  <Button title="サービスに戻る" onclick="{backToHome}" />
</div>
<div class="license">© 2021 SLOUCH</div>

<style lang="scss">
  @import "../assets/definition.scss";
  .logo-container {
    position: fixed;
    padding: 20px 0px 0px 20px;
  }
  .privacy-policy {
    width: 75vw;
    max-width: 1100px;
    @extend %center;
    padding: 5em 0 2em 0;
    font-family: "nsjp";
    &-title {
      color: $slouch-green;
      h1 {
        font-size: 40px;
        i {
          padding-right: 10px;
        }
      }
    }
    &-intro {
      text-align: left;
      color: $general-black;
      font-weight: 500;
    }
    &-contents {
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
  }
  .back-button-container {
    @extend %center;
    padding-bottom: 4em;
  }
  .license {
    @extend %center;
    padding-bottom: 2em;
    color: $slouch-green;
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    .privacy-policy {
      width: 90vw;
      max-width: 90vw;
      &-title {
        h1 {
          font-size: 25px;
        }
      }
      &-contents {
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
  }
</style>
