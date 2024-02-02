
var canvas = document.getElementById("myCanvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "myCanvas";
    document.body.appendChild(canvas);
  }

  // Get canvas context and set dimensions
  var ctx = canvas.getContext("2d");
  canvas.width = 500;  // Adjust width as needed
  canvas.height = 300; // Adjust height as needed

  // Define rectangle properties and center it
  var rectWidth = 200;
  var rectHeight = 150;
  var rectX = (canvas.width - rectWidth) / 2;
  var rectY = (canvas.height - rectHeight) / 2;

  // Draw the blue rectangle
  ctx.fillStyle = "blue";
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
})();
