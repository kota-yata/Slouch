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

// ログイン中のユーザーのコレクションを取得する
export const getDbRoot = async () => {
  const uid = sessionStorage.getItem("uid");
  const database = firebase.firestore();
  const uRoot = database.collection("users").doc(uid);
  const current = await uRoot.get();
  if (!current.exists) return null;
  return {
    uRoot: uRoot,
    current: current,
  };
};

// タイトルに引数のtitleを挿入する
export const insertTitle = (title) => {
  const noteTitle = document.getElementById("note_title");
  if (!noteTitle) throw new Error("noteTitle doesn't exist");
  noteTitle.value = title;
  console.log("--- Firebase mynote title is inserted to profile input ---");
};

// エディターに引数のbodyを挿入する
export const insertBody = (body) => {
  const mainNote = document.getElementById("main_note");
  if (!mainNote) throw new Error("mainNote doesn't exist");
  mainNote.textContent = body;
  console.log("--- Firebase mynote body is inserted to editor textarea ---");
};
