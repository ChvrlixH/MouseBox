let box = document.querySelector(".box");

window.addEventListener("mousemove", (event) => {
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  box.style.top = mouseY + "px";
  box.style.left = mouseX + "px";
});
