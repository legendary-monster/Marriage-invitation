const canvas = document.getElementById("scratchCard");
const ctx = canvas.getContext("2d");

// Draw overlay
ctx.fillStyle = "#c897b8";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#fff";
ctx.font = "20px Georgia";
ctx.fillText("Rub here to reveal the date!", 60, 100);

// Hidden text
const hiddenText = "Wedding Date: 11th May 2026";

function revealText() {
  ctx.globalCompositeOperation = "destination-over";
  ctx.fillStyle = "#000000";
  ctx.font = "24px Georgia";
  ctx.fillText(hiddenText, 50, 120);
}

let isDrawing = false;

// Mouse events
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

// Touch events
canvas.addEventListener("touchstart", () => isDrawing = true);
canvas.addEventListener("touchend", () => isDrawing = false);
canvas.addEventListener("touchmove", drawTouch);

function draw(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();
  revealText();
}

function drawTouch(e) {
  if (!isDrawing) return;
  e.preventDefault(); // prevent scrolling
  const rect = canvas.getBoundingClientRect();
  const touch = e.touches[0];
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();
  revealText();
}
