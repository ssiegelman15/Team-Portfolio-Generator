const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML.js');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

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

const employeeQuestions = [
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

function createManager(data) {
  const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice);
  teamMembers.push(manager);
}

function createEngineer(data) {
  const engineer = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.employeeGithub);
  teamMembers.push(engineer);
}

function createIntern(data) {
  const intern = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.employeeSchool);
  teamMembers.push(intern);
}

function renderHTML(html) {
  fs.writeFile('./dist/index.html', html, (err) => {
      err ? console.error(err) : console.log("HTML has been generated!")
  })
}

function renderCSS(css) {
  fs.writeFile('./dist/style.css', css, (err) => {
      err ? console.error(err) : console.log("CSS has been generated!")
  })
}

function addEmployees() {
  inquirer
    .prompt(employeeQuestions)
    .then((response => {
      if (response.addEmployee === "Engineer") {
        createEngineer(response);
        addEmployees();
    }   else if (response.addEmployee === "Intern") {
        createIntern(response);
        addEmployees();
    } else {
      renderCSS(generateCSS());
      renderHTML(generateHTML(teamMembers));
    }
    }));
}

// Function to initialize app
function init() {
  inquirer
    .prompt(managerQuestions)
    .then((response => {
      createManager(response);
      addEmployees();
    }));
}

// Function call to initialize app
init();