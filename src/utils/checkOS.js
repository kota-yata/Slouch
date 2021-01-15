"use strict";

// UserAgentから使用OSを取得する
export const getOS = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf("windows nt") !== -1) return "windows";
  if (ua.indexOf("android") !== -1) return "android";
  if (ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) return "ios";
  if (ua.indexOf("mac os x") !== -1) return "mac";
  return "unknown OS";
};

// Macの場合はツールチップのコマンドアイコンを⌘に、そうでなければWinにする
export const commandType = getOS() === "mac" ? "⌘" : "Win";
