<script lang="ts" context="module">
  // UserAgentから使用OSを取得する
  const getOS = (): string => {
    const ua: string = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf("windows nt") !== -1) return "windows";
    if (ua.indexOf("android") !== -1) return "android";
    if (ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) return "ios";
    if (ua.indexOf("mac os x") !== -1) return "mac";
    return "unknown OS";
  };

  // Macの場合はツールチップのコマンドアイコンを⌘に、そうでなければWinにする
  export const commandType = getOS() === "mac" ? "⌘" : "Win";

  export const getBrowser = (): string => {
    const userAgent: string = window.navigator.userAgent.toLowerCase();

    if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) return "IE";
    if (userAgent.indexOf("edge") != -1) return "Edge";
    if (userAgent.indexOf("chrome") != -1) return "Chrome";
    if (userAgent.indexOf("safari") != -1) return "Safari";
    if (userAgent.indexOf("firefox") != -1) return "Firefox";
    if (userAgent.indexOf("opera") != -1) return "Opera";
    return "unknown Browser";
  };
</script>
