const textArea = document.getElementById("text-area");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const alignLeft = document.getElementById("align-left");
const alignCenter = document.getElementById("align-center");
const alignRight = document.getElementById("align-right");
const colorSet = document.getElementById("color-set");
colorSet.addEventListener("mouseleave", function (e) {
  textArea.style.color = e.target.value;
});
textArea.style.color = colorSet;
// bold.addEventListener("click", function () {
//   textArea.classList.toggle("bold");
// });

underline.addEventListener("click", function () {
  textArea.classList.toggle("underline");
  underline.classList.toggle("active");
});
clickBtn(italic, "italic");
clickBtn(bold, "bold");
clickBtn(alignLeft, "align-left");
clickBtn(alignRight, "align-right");
clickBtn(alignCenter, "align-center");

function clickBtn(targetBtn, className) {
  targetBtn.addEventListener("click", function () {
    textArea.classList.toggle(className);
    targetBtn.classList.toggle("active");
  });
}
