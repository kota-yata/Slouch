<script lang="ts" context="module">
  import firebase from "firebase/app";
  import "firebase/firestore";
  import { fireToast } from "../components/Toast.svelte";

  // 10桁のランダムなノートIDを発行
  export const generateRandomNID = (): string => {
    const string: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const uintBuffer: Uint32Array = new Uint32Array(1);
    let randomString: string = "";
    for (let i = 0; i < 10; i++) {
      const randomNum: Uint32Array = window.crypto.getRandomValues(uintBuffer);
      // Uint32の最大値+1で割る事で0~1の乱数を算出する
      const randomDecimal: number = randomNum[0] / (4294967295 + 1);
      // stringの最大インデックスをかけることで0~62の乱数を算出する
      const result: number = Math.ceil(randomDecimal * 61);
      randomString += string[result];
    }
    return randomString;
  };

  // タイムスタンプ用の日付を取得
  export const generateFormattedDate = (): string => {
    const today: Date = new Date();
    const year: number = today.getFullYear();
    const month: number = today.getMonth() + 1;
    const date: number = today.getDate();
    const hours: number = today.getHours();
    const minutes: number = today.getMinutes();
    const formattedDate: string = `${year}/${month}/${date} ${hours}:${minutes}`;
    return formattedDate;
  };

  // ログイン中のユーザーのコレクションを取得する
  export const getDbRoot = async (): Promise<dbRoot> => {
    const uid: string | null = sessionStorage.getItem("uid");
    const database: any = firebase.firestore();
    let uRoot: any = database.collection("users").doc(uid);
    let current: any = await uRoot.get();
    if (!current.exists) {
      current = null;
    }
    return {
      uRoot: uRoot,
      current: current,
    };
  };

  // タイトルに引数のtitleを挿入する
  export const insertTitle = (title: string): void => {
    const noteTitle: HTMLInputElement | null = document.getElementById("note_title") as HTMLInputElement;
    if (!noteTitle) throw new Error("noteTitle doesn't exist");
    noteTitle.value = title;
    console.log("--- Firebase mynote title is inserted to profile input ---");
  };

  // エディターに引数のbodyを挿入する
  export const insertBody = (body: string): void => {
    const mainNote: HTMLInputElement | null = document.getElementById("main_note") as HTMLInputElement;
    if (!mainNote) throw new Error("mainNote doesn't exist");
    mainNote.textContent = body;
    mainNote.value = body;
    console.log("--- Firebase mynote body is inserted to editor textarea ---");
  };

  export class FileHandler {
    static fileHandle: any;
    static store(fileHandle: any) {
      this.fileHandle = fileHandle;
    }
    static get() {
      if (!this.fileHandle) {
        fireToast("保存先が見つかりません", "warning");
        throw new Error("Local file was not found");
      }
      return this.fileHandle;
    }
    static remove() {
      this.fileHandle = null;
    }
  }
</script>
