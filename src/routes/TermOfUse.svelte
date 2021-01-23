<script lang="ts">
  import DocumentParagraph from "../components/DocumentParagraph.svelte";
  import HeaderLogo from "../components/svgComponents/HeaderLogo.svelte";
  import Button from "../components/Button.svelte";
  import { push } from "svelte-spa-router";

  const backToHome = (): void => {
    push("/");
  };
</script>

<HeaderLogo />
<div class="term-of-use">
  <div class="term-of-use-title">
    <h1><i class="fas fa-scroll"></i> 利用規約</h1>
  </div>
  <div class="term-of-use-intro">
    この利用規約（以下、「本規約」といいます。）は、SLOUCHがこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
    本サービスの利用者（以下、「ユーザー」といいます。）には、本規約に同意のうえ，本サービスをご利用いただきます。
  </div>
  <DocumentParagraph
    icon="walking"
    title="第1条（規約の適用）"
    sentence="本規約は、本サービスの提供条件及び本サービス運営者（以下「運営者」といいます。）と利用者との間の権利義務関係を定めることを目的とし、利用者と運営者との間のサービスの利用に関わる一切の関係に適用されるものとします。"
  />
  <DocumentParagraph
    icon="feather-alt"
    title="第2条（利用資格）"
    sentence="本サービスは以下の条件をすべて満たす方に限りご利用できます。<br />
    ・ご自身でインターネットの利用環境、端末、ソフトウェアなどを用意することができる方<br />
    ・本規約に同意かつ遵守できる方<br />
    ・過去に本規約に違反したことのない方"
  />
  <DocumentParagraph
    icon="key"
    title="第3条（利用者IDおよびパスワードの管理）"
    sentence="利用者は、自己の責任において、本サービスの利用者IDおよびパスワード等を適切に管理及び保管するものとします。利用者は、いかなる場合にも、アカウントの使用権限を第三者に譲渡または貸与することはできません。<br />
    パスワード又はユーザーID等の管理不十分、第三者の使用等によって生じた損害または不利益に関する責任は利用者が負うものとし、運営者は一切の責任を負いません。"
  />
  <DocumentParagraph
    icon="ban"
    title="第4条（禁止事項）"
    sentence="利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。<br />
    ・本サービスの機能を破壊する行為<br />
    ・本サービスの利用者および運営者、第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為<br />
    ・その他、運営者が不適切と判断する行為<br />
    これらの行為が発覚した場合、その利用者のアカウントを停止・削除する場合があります。"
  />
  <DocumentParagraph
    icon="store-slash"
    title="第5条（本サービスの提供の停止等）"
    sentence="運営者は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。<br />
    ・本サービスのシステムの保守点検または更新を行う場合<br />
    ・やむをえない事情によりサービスの提供が困難になった場合<br />
    ・コンピュータまたは通信回線等が事故により停止した場合<br />
    ・本サービスが開発にあたって依存しているサービスが停止した場合<br />
    ・その他、運営者が本サービスの提供が困難と判断した場合"
  />
  <DocumentParagraph
    icon="envelope-open-text"
    title="第6条（保証の否認および免責事項）"
    sentence="運営者は本サービスに技術的、法律的な瑕疵がないことを保証していません。本サービスの利用により生じた一切の損害に対して運営者は一切の責任も負いかねます。"
  />
  <DocumentParagraph
    icon="paragraph"
    title="第7条（利用規約の変更）"
    sentence="運営者は必要に応じて、この利用規約の内容を変更します。本規約は予告なく変更される場合がありますが、利用者はこのページで開示される最新の規約に同意するものとします。<br /><br />
    制定 : 2021年1月8日"
  />
</div>
<div class="back-button-container">
  <Button title="サービスに戻る" onclick="{backToHome}" />
</div>
<div class="license">© 2021 SLOUCH</div>

<style lang="scss">
  @import "../assets/definition.scss";

  .term-of-use {
    @extend %center;
    width: 75vw;
    max-width: 1100px;
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
    .term-of-use {
      width: 90vw;
      max-width: 90vw;
      &-title {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
</style>
