// import inquirer
const inquirer = require("inquirer");
const fs = require("fs");
console.log("Welcome to my README Generator!")
console.log("Please answer the following questions to generate a professional README for your project.")
//ask the the questions
inquirer.prompt([
    {
        type:"input",
        message:"What is the project titile?",
        name:"title",
    },
    {
        type:"input",
        message:"Provide a description of the project:",
        name:"desscription",
    },
    {
        type:"input",
        message:"What are the steps required to install your project?",
        name:"installation",
    },
    {
        type:"input",
        message:"Provide instructions and examples for use",
        name:"usage",
    },

    {
        type:"input",
        message:"List your collaborators, if any, with links to their GitHub profiles.",
        name:"credit",
    },
    {
        type:"input",
        message:"If your project has a lot of features, list them here.",
        name:"features",
    },
    {
        type:"input",
        message:"How you would like other developers to contribute in this project?",
        name:"contribute",
    },
    {
        type:"checkbox",
        message:"Choose the license for your project",
        choices: ["BSD","MIT","GPL","None"],
        name:"license",
    },
    {
        type:"input",
        message:"Then Provide examples on how to run your project here(url,image,..):",
        name:"test",
    },
    {
        type:"input",
        message:"Provide your github username.",
        name:"github",
    },
    {
        type:"input",
        message:"Provide your email.",
        name:"email",
    },
  ]).then(function({title,desscription,installation,usage,credit,features,contribute,license,test,github,email}) {
    let generateReadme = `
## Badge
![license](https://img.shields.io/badge/${license}-100%25-brightgreen)
## Title
    ${title}
## Table of Contents
- [Desscription](#desscription)
- [Installation](#installation)
- [Usage](#usage)
- [Credit](#credit)
- [Features](#features)
- [Contribute](#contribute)
- [License](#license)
- [Testing](#test)
- [Question](#question)
- [Badge](#badge)
## Desscription
    ${desscription}

## Installation
    ${installation}

## Usage
    ${usage}

## Credit
    ${credit}

## Features
    ${features}

## Contribute
    ${contribute}

## License
    ${license}

## Testig
    ${test}

## Question
    Contact me with the link below if you have any questions!

    Github: https://github.com/${github}

    Mail to: ${email}

`
    console.log(generateReadme);

    fs.writeFileSync(`${title}.md`,generateReadme)
  });