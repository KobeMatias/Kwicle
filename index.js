const inquirer = require("inquirer");
// const fs = require("fs");
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
        message: "link to github profile"
    },
    // {
    //   type: "checkbox",
    //   message: "What would o",
    //   name: "stack",
    //   choices: [
    //     "HTML", 
    //     "CSS", 
    //     "JavaScript", 
    //     "MySQL"
    //   ]
    // },
    // {
    //   type: "list",
    //   message: "What is your preferred method of communication?",
    //   name: "contact",
    //   choices: [
    //     "email",
    //     "phone",
    //     "telekinesis"
    //   ]
    // }
  ]).then(function(data) {
    generateMarkdown(data)
  });
