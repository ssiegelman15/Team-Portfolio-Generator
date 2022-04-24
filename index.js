const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require('./dist/generateTemplate.js');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// List of questions to ask user
const questions = [
  {
    type: "input",
    message: "Please enter the Manager's name:",
    name: "managerName",
  },
  {
    type: "input",
    message: "Please enter the Manager's employee ID:",
    name: "managerID",
  },
  {
    type: "input",
    message: "Please enter the Manager's email:",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Please enter the Manager's office number:",
    name: "managerOffice",
  },
  {
    type: "list",
    message: "Choose the role of the team member:",
    choices: ["Intern", "Engineer"],
    name: "employee",
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