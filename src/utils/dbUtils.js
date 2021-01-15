"use strict";
import firebase from "firebase/app";
import "firebase/firestore";

// 10桁のランダムなノートIDを発行
export const generateRandomNID = () => {
  const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const uintBuffer = new Uint32Array(1);
  let randomString = "";
  for (let i = 0; i < 10; i++) {
    const randomNum = window.crypto.getRandomValues(uintBuffer);
    // Uint32の最大値+1で割る事で0~1の乱数を算出する
    const randomDecimal = randomNum[0] / (4294967295 + 1);
    // stringの最大インデックスをかけることで0~62の乱数を算出する
    const result = Math.ceil(randomDecimal * 61);
    randomString += string[result];
  }
  return randomString;
};

// タイムスタンプ用の日付を取得
export const generateFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const formattedDate = `${year}/${month}/${date}`;
  return formattedDate;
};

const uid = sessionStorage.getItem("uid");

// ログイン中のユーザーのコレクションを取得する
export const getDbRoot = async () => {
  const database = firebase.firestore();
  const uRoot = database.collection("users").doc(uid);
  const current = await uRoot.get();
  return {
    uRoot: uRoot,
    current: current,
  };
};
