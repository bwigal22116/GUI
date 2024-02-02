// Gui made by Blake!

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rectWidth = 200;
var rectHeight = 150;
var rectX = (canvas.width - rectWidth) / 2;
var rectY = (canvas.height - rectHeight) / 2;

ctx.fillStyle = "blue";
ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

