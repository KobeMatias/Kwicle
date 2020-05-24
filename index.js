const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of this project. What was the motivation behind this project?"
    },
    {
        type: "input",
        name: "install",
        message: "What are the steps to install this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this project?"
    },
    {
        type: "input",
        name: "license",
        message: "Please list any licensing used on this project here."
    },
    {
        type: "input",
        name: "contributions",
        message: "Please list any developers who contributed to this project here."
    },
    {
        type: "input",
        name: "test",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them."
    },
    {
        type: "input",
        name: "githubprofile",
        message: "Please link your Github profile."
    },
    
  ]).then(function(data) {
    generateMarkdown(data)
  });
