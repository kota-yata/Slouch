<script lang="ts" context="module">
  import { getDbRoot } from "../../utils/dbUtils.js";
  import { fireToast } from "../../utils/fireToast.js";

  const html: string =
    '\
  <div class="container">\
    <span class="file-sentence">形式を選ぶ</span>\
    <button class="file-button-button download-button" id="download_md">.mdファイル</button>\
    <button class="file-button-button download-button" id="download_txt">.txtファイル</button>\
    <button class="file-button-button download-button" id="download_html">.htmlファイル</button>\
  </div>';

  interface optsContent {
    description: string;
    accept: any;
  }
  interface optsObject {
    [key: string]: optsContent;
  }
  type type = "txt" | "md" | "html";

  // 指定された型のfileHandleを返す
  const returnFileHandle = async (type: type) => {
    const optsObject: optsObject = {
      txt: { description: "Text File", accept: { "text/plain": [".txt", ".text"] } },
      md: { description: "Markdown", accept: { "text/markdown": [".md"] } },
      html: { description: "HTML", accept: { "text/html": [".html", ".htm"] } },
    };
    const opts = {
      types: [
        {
          description: optsObject[type].description,
          accept: optsObject[type].accept,
        },
      ],
    };
    const tmpFileHandle: any = await window.showSaveFilePicker(opts);
    return tmpFileHandle;
  };

  // File System Access APIに対応していないブラウザでのダウンロード処理
  const writeFileEarlier86 = (dataScheme: string, component: string): void => {
    console.log("This browser doesn't support File System Access API");
    const a = document.createElement("a");
    a.href = `data:text/${dataScheme},` + encodeURIComponent(component);
    a.download = "Slouch";
    a.click();
    return;
  };
  // File System Accesss APIに対応しているブラウザでのダウンロード処理
  const writeFileLater86 = async (type: type, component: string) => {
    const newFileHandle: any = await returnFileHandle(type);
    const writable = await newFileHandle.createWritable();
    await writable.write(component);
    await writable.close();
    const fileHandle = await newFileHandle;
    return fileHandle;
  };

  const saveFileHandle = async (fileHandle: any) => {
    const dbRoot: dbRoot | null = await getDbRoot();
    if (!dbRoot) return;
    const currentNoteID: any = dbRoot.current.data().current;
    if (!currentNoteID) return;
    dbRoot.uRoot.doc(currentNoteID).update({
      fileHandle: "fileHandle",
    });
  };

  interface typeDocumentContent {
    dataScheme: string;
    Component: any;
  }
  interface typeDocumentObject {
    [key: string]: typeDocumentContent;
  }

  // 新規ファイルに出力する
  const saveNewFile = async (type: type) => {
    const hasShowSaveFilePicker: boolean = "showSaveFilePicker" in window;
    const mainNote: HTMLInputElement | null = document.getElementById("main_note") as HTMLInputElement;
    if (!mainNote) throw new Error("mainNote doesn't exist");
    const previewNote: HTMLElement | null = document.getElementById("preview_note");
    if (!previewNote) throw new Error("previewNote doesn't exist");
    const typeDocumentObject: typeDocumentObject = {
      txt: { dataScheme: "plain", Component: mainNote.value },
      md: { dataScheme: "markdown", Component: mainNote.value },
      html: { dataScheme: "html", Component: previewNote.innerHTML },
    };
    const component: string = typeDocumentObject[type].Component;
    // Chrome 85 以前
    if (!hasShowSaveFilePicker) {
      console.log("This browser doesn't support File System Access API");
      const URIDataScheme = typeDocumentObject[type].dataScheme;
      writeFileEarlier86(URIDataScheme, component);
      fireToast("ダウンロード完了！");
      return;
    }
    // Chrome 86 以降
    const fileHandle = await writeFileLater86(type, component);
    saveFileHandle(fileHandle);
    fireToast("ダウンロード完了！");
    return;
  };

  export const downloadInsertHTML = (element: HTMLElement): void => {
    element.insertAdjacentHTML("beforeend", html);
    const downloadMD: HTMLElement | null = document.getElementById("download_md");
    if (!downloadMD) throw new Error("downloadMD doesn't exist");
    downloadMD.addEventListener("click", async () => {
      await saveNewFile("md");
    });
    const downloadTXT: HTMLElement | null = document.getElementById("download_txt");
    if (!downloadTXT) throw new Error("dowloadTXT doesn't exist");
    downloadTXT.addEventListener("click", async () => {
      await saveNewFile("txt");
    });
    const downloadHTML: HTMLElement | null = document.getElementById("download_html");
    if (!downloadHTML) throw new Error("downloadHTML doesn't exist");
    downloadHTML.addEventListener("click", async () => {
      await saveNewFile("html");
    });
  };
</script>
