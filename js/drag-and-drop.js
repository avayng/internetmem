let offsetX, offsetY, draggedElement;

document.addEventListener("dragstart", function (event) {
  draggedElement = event.target;
  const rect = draggedElement.getBoundingClientRect();
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;
});

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  if (draggedElement) {
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    draggedElement.style.left = event.clientX + scrollX - offsetX + "px";
    draggedElement.style.top = event.clientY + scrollY - offsetY + "px";
  }
});

document.addEventListener("dragend", function () {
  draggedElement = null;
  offsetX = 0;
  offsetY = 0;
});
