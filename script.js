const textArea = document.getElementById("text-area");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
bold.addEventListener("click", function () {
  textArea.classList.add("bold");
});

underline.addEventListener("click", function () {
  textArea.classList.toggle("underline");
  underline.classList.toggle("active");
});
