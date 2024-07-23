const fs = require("fs");
const { Circle, Square, Triangle } = require("./shapes");

function generateSVG(shape, text, textColor, shapeColor) {
  let shapeObj;
  switch (shape) {
    case "circle":
      shapeObj = new Circle(text, textColor, shapeColor);
      break;
    case "square":
      shapeObj = new Square(text, textColor, shapeColor);
      break;
    case "triangle":
      shapeObj = new Triangle(text, textColor, shapeColor);
      break;
    default:
      throw new Error("Invalid shape");
  }

  const svgContent = shapeObj.render();
  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
}

module.exports = generateSVG;
