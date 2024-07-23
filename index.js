
const inquirer = require('inquirer');
const generateSVG = require('./generateSVG');

async function promptUser() {
  const responses = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the text:",
      validate: (input) =>
        input.length <= 3 || "Text cannot be longer than 3 characters",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hexadecimal):",
    },
  ]);

  generateSVG(
    responses.shape,
    responses.text,
    responses.textColor,
    responses.shapeColor
  );
}

promptUser();
