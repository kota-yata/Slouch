"use strict";

// NewFile.svelteとMyNote.svelteで使われる
export const backToHome = () => {
  const backwardButton = document.getElementById("backward_button");
  if (!backwardButton) return console.log("Side card is not opened");
  backwardButton.click();
};
