const inquirer = require('inquirer');
const emailValidator = require('email-validator');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Empty array to be populated by each added employee
teamMembers = []

// Creating validation that input string isn't empty
const nonEmptyValidation = async (input) => {
  if (input === '') {
    return 'Please type something before hitting enter.';
  }
  return true;
};

const validateEmail = async (input) => {
  if (emailValidator.validate(input)) {
    return true
  };
  return "Please type in a valid email address."
};

// List of questions to ask user
const managerQuestions = [
  {
    type: "input",
    message: "Please enter the Manager's name:",
    name: "managerName",
    validate: nonEmptyValidation,
  },
  {
    type: "input",
    message: "Please enter the Manager's employee ID:",
    name: "managerID",
    validate: nonEmptyValidation,
  },
  {
    type: "input",
    message: "Please enter the Manager's email:",
    name: "managerEmail",
    validate: validateEmail,
  },
  {
    type: "input",
    message: "Please enter the Manager's office number:",
    name: "managerOffice",
    validate: nonEmptyValidation,
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
    validate: nonEmptyValidation,
  },
  {
    type: "input",
    message: "Please enter the Employee's employee ID:",
    name: "employeeID",
    validate: nonEmptyValidation,
  },
  {
    type: "input",
    message: "Please enter the Employee's email:",
    name: "employeeEmail",
    validate: validateEmail,
  },
  {
    type: "input",
    message: "Please enter the Employee's Github username:",
    name: "employeeGithub",
    validate: nonEmptyValidation,
    when: (answer) => answer.employeeType === "Engineer"
  },
  {
    type: "input",
    message: "Please enter the Employee's School:",
    name: "employeeSchool",
    validate: nonEmptyValidation,
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
  fs.writeFile('./dist/generatedIndex.html', html, (err) => {
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