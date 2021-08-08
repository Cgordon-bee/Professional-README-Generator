
const inquirer = require('inquirer');
const util =require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);



const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title",
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description",
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ]
    },
    {   
        type: "input",
        message: "installation required",
        name: "installation ",
        default: "Along with node other dependencies",
    },
    {
        type: "input",
        message: "would you welcome collaboration on this project?",
        name: "usage"
    },
    {   type: "input",
        message: "please enter you email address",
        name: "email"


    }
  ]




  // const promptUser = async() => {
  //   const answers= await inquirer.prompt(questions)
  //   console.log (answers)
  // }

  const promptUser = () => {
    return inquirer
        .prompt(questions);
}

const answers = promptUser();

// create markdown content from user answers


// write markdown content to README.md file

//
