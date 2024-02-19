let errMessage = document.getElementById("warning-message");
let imageEl = document.getElementById("image");
let imageSize = document.getElementById("img-size");

let originalWidth = 200;
let maxWidth = 300;
let minWidth = 100;

imageSize.textContent = originalWidth + "px";
imageEl.style.width = originalWidth + "px";

function onIncrement() {
  if (originalWidth >= maxWidth) {
    errMessage.textContent = "Too big. Decrease the size of the Image.";
  } else {
    errMessage.textContent = "";
    originalWidth = originalWidth + 5;
    imageEl.style.width = originalWidth + "px";
    imageSize.textContent = originalWidth + "px";
  }
}

function onDecrement() {
  if (originalWidth <= minWidth) {
    errMessage.textContent = "Can't Visible. Increase the size of the Image.";
  } else {
    errMessage.textContent = "";
    originalWidth = originalWidth - 5;
    imageEl.style.width = originalWidth + "px";
    imageSize.textContent = originalWidth + "px";
  }
}


