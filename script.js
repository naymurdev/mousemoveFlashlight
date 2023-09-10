const cursor = document.getElementById("cursor");
const FLModeCheckbox = document.getElementById("fl-mode");
const element = document.getElementById("sample-text");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

FLModeCheckbox.addEventListener("click", (_) => {
  document.body.dataset.flmode = FLModeCheckbox.checked;
});
