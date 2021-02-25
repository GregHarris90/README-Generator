// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// Questions/Sections: 
// Title? X
// Description? X
// Table of Contents? Build in template literal
// Installation? X
// Usage? X
// License? X
// Credits? X
// Contributing? X
// GitHub username? X
// Tests? 
// Questions?
// 
// 

const promptUser = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a brief description of your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions on how to use your application.",
        },
        {
            type: "list",
            name: "license",
            message: "Select the appropriate licenses.",
            choices: ["Apache License v2.0", "GNU General Public License v3.0", "MIT License"],
        },
        {
            type: "input",
            name: "credits",
            message: "Please share who worked on this project?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        }
    ]);

const displayMarkdown = (data) =>
    `
    # Project Title:${data.title}
    # Table of Contents
    
    # Description
    # Installation
    # Usage
    # Contributing
    # Tests
    # License
    # Questions
    
    
    
    
    
    
    
    `


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    promptUser().then((data) => {
        try {
            const Markdown = displayMarkdown(data);
            fs.writeFileSync("README.md", Markdown);
            console.log("Successfully wrote to README.md");
        } catch (error) {
            console.log(error);
        }
    });
};

// Function call to initialize app
init();
