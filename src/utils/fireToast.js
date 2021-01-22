"use strict";

export const fireToast = (message) => {
  const toast = document.getElementById("toast");
  const toastWords = document.getElementById("toast_words");
  toastWords.innerText = message;
  toast.classList.add("toast-visible");
  const removeClass = () => {
    toast.classList.remove("toast-visible");
  };
  setTimeout(removeClass, 2750);
};
