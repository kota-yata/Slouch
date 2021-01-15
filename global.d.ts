declare module "firebase/app";
declare module "marked";
declare module "svelte-emoji-selector";
declare module "highlight.js";
declare module "dompurify";
declare const lazyload: any;

interface notesObj {
  nid?: string | undefined;
  name: string;
  date: string;
  body: string;
}

interface dbRoot {
  uRoot: any;
  current: any;
}
