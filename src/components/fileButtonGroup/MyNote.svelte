<script lang="ts" context="module">
  const generateHTML = (title: string, date: string): string => {
    const html: string = `
      <div class="mynote-container">
        <div class="mynote-title">${title}</div>
        <div class="mynote-date">${date}</div>
      </div>`;
    return html;
  };
  export const myNoteInsertHTML = (element: HTMLElement): void => {
    const titleHTML: string = '<div class="file-sentence mynote-sentence">ノートを選ぶ</div>';
    element.insertAdjacentHTML("beforeend", titleHTML);
    for (let i = 0; i < 10; i++) {
      const htmlToInsert: string = generateHTML("dummyアイウエおsuperlong長いタイトル", `2021/01/${i}`);
      element.insertAdjacentHTML("beforeend", htmlToInsert);
    }
  };
</script>
