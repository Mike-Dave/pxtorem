"use strict";

const px = document.querySelector(".px-box");
const rem = document.querySelector(".rem-box");

px.addEventListener("keyup", function () {
  const pixelValue = px.value;

  function pxToRem(value) {
    return Number((value * 1) / 16);
  }

  rem.value = pxToRem(pixelValue);

  if (pixelValue === "") {
    rem.value = null;
    rem.style.border = null;
  } else {
    rem.style.border = "2px solid #E90064";
  }
});
rem.addEventListener("keyup", function () {
  const remValue = rem.value;

  function remToPx(value) {
    return Number((value * 16) / 1);
  }

  px.value = remToPx(remValue);

  if (remValue === "") {
    px.value = null;
    px.style.border = null;
  } else {
    px.style.border = "2px solid #E90064";
  }
});
