const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require('./generateTemplate.js');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// List of questions to ask user
const questions = [
  {

  }
];

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((input) => {
      writeToFile('GenerateTeamPortfolio.html', generateTemplate(input))
    })
}

// Function call to initialize app
init();