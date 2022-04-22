const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require('./src/generateTemplate.js');

const questions = [
  {

  }
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((input) => {
      writeToFile('GenerateTeamPortfolio.html', generateTemplate(input))
    })
}

// Function call to initialize app
init();