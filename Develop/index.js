const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
      },
      {
        type: "input",
        name: "install",
        message: "How do you this install app?",
      },
      {
        type: "input",
        name: "test",
        message: "How do you test this app?",
      },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
