const textArea = document.getElementById("text-area");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const alignLeft = document.getElementById("align-left");
const alignCenter = document.getElementById("align-center");
const alignRight = document.getElementById("align-right");
bold.addEventListener("click", function () {
  textArea.classList.toggle("bold");
});

underline.addEventListener("click", function () {
  textArea.classList.toggle("underline");
  underline.classList.toggle("active");
});

clickBtn(alignLeft, "align-left");
clickBtn(alignRight, "align-right");
clickBtn(alignCenter, "align-center");

function clickBtn(targetBtn, className) {
  targetBtn.addEventListener("click", function () {
    textArea.classList.toggle(className);
    targetBtn.classList.toggle("active");
  });
}
