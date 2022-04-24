const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// Empty array to be populated by each added employee
teamMembers = []

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

const continueOption = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: ["Add Another Employee", "I'm Finished"],
    name: "continueOption",
  }
]

const employeeQuestions = [
  {
    type: "list",
    message: "Please choose role of next employee:",
    choices: ["Engineer", "Intern"],
    name: "employeeType",
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
    message: "Please enter the Employee's Github username:",
    name: "employeeGithub",
    when: (answer) => answer.employeeType === "Engineer"
  },
  {
    type: "input",
    message: "Please enter the Employee's School:",
    name: "employeeSchool",
    when: (answer) => answer.employeeType === "Intern"
  },
];

// Create manager using inputs and add it to team member array
function createManager(data) {
  const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice);
  teamMembers.push(manager);
}

// Create engineer using inputs and add it to team member array
function createEngineer(data) {
  const engineer = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.employeeGithub);
  teamMembers.push(engineer);
}

// Create intern using inputs and add it to team member array
function createIntern(data) {
  const intern = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.employeeSchool);
  teamMembers.push(intern);
}

// Generate HTML file
function renderHTML(html) {
  fs.writeFile('./dist/index.html', html, (err) => {
    err ? console.error(err) : console.log("HTML has been generated!")
  })
}

function checkFinished() {
  inquirer
    .prompt(continueOption)
    .then((response => {
      if (response.continueOption === "I'm Finished") {
        renderHTML(generateHTML(teamMembers));
      } else {
        addEmployees();
      }
    }));
}

// Adds employees one by one until Finished is chosen, then it writes HTML file
function addEmployees() {
  inquirer
    .prompt(employeeQuestions)
    .then((response => {
      if (response.employeeType === "Engineer") {
        createEngineer(response);
        checkFinished();
      } else if (response.employeeType === "Intern") {
        createIntern(response);
        checkFinished();
      }
    }));
}

// Function to initialize app
function init() {
  inquirer
    .prompt(managerQuestions)
    .then((response => {
      createManager(response);
      checkFinished();
    }));
}

// Function call to initialize app
init();