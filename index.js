// Gui made by Blake!

var canvas = document.createElement("canvas");
  canvas.id = "myCanvas";
  canvas.width = 300;
  canvas.height = 200;
  document.body.insertBefore(canvas, document.body.firstChild);  // Insert at top

  // Get the 2D drawing context
  var ctx = canvas.getContext("2d");

  // Set font attributes for clarity and adjustability
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";  // Center text horizontally

  // Draw the blue rectangle and text
  var rectWidth = 300;
  var rectHeight = 150;
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, rectWidth, rectHeight);  // Align rectangle to top and left
  ctx.fillText("Proton Games Center", rectWidth / 2, rectHeight / 2);  // Center text within rectangle

  // Ensure canvas content fits within window (optional)
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
})();
