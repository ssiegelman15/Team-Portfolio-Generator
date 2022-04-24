const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require('./dist/generateTemplate.js');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// List of questions to ask user
const managerQuestions = [
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
  }
];

const employeeQuestions =[
  {
    type: "list",
    message: "Choose the role of the team member:",
    choices: ["Intern", "Engineer", "Finished"],
    name: "addEmployee",
  },
  {
    type: "input",
    message: "Please enter the Employee's name:",
    name: "employeeName",
  },
  {
    type: "input",
    message: "Please enter the Employee's employee ID:",
    name: "employeeID",
  },
  {
    type: "input",
    message: "Please enter the Employee's email:",
    name: "employeeEmail",
  },
  {
    type: "input",
    message: "Please enter the Employee's Github usernam:",
    name: "employeeGithub",
    when: (answer) => answer.addEmployee === "Engineer"
  },
  {
    type: "input",
    message: "Please enter the Employee's School:",
    name: "employeeSchool",
    when: (answer) => answer.addEmployee === "Intern"
  },
];

// Function to initialize app
function init() {
  inquirer
    .prompt(managerQuestions)
    .prompt(employeeQuestions)
    // Need to change input now that I've added complexity to the questions, perhaps write a function that gets called after each prompt
    // to store the data and then use that storage variable to write the html file
    .then((input) => {
      writeToFile('GenerateTeamPortfolio.html', generateTemplate(input))
    })
}

// Function call to initialize app
init();