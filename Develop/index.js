const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
      },
      {
        type: "input",
        name: "installation",
        message: "How do you this install app?",
      },
      {
        type: "input",
        name: "test",
        message: "How do you test this app?",
      },
      {
        type: "input",
        message: "How do you use this app?",
        name: "usage",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license",
        choices: ["MIT", "Apache 2.0", "GPL", "BSD", "Mozilla", "ISC", "none"]
      },
      {
        type: "input",
        name: "contributors",
        message: "Who are all the contributors?",
      },
      {
        type: "input",
        name: "GitHub",
        message: "Enter your github username",
      },
      {
        type: "input",
        name: "Email",
        message:  "Please enter your email",
      },
      {
        type: "input",
        name: "Questions",
        message: "What is best way to reach you with questions?",
      },
   
   
    
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("GeneratedReadme.md", generateMarkdown({ ...data }));
    })
}

// function call to initialize program
init();