// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input X

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
            message: "Please provide a brief description of your project!",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide instructions on how to use your application!",
        },
        {
            type: "list",
            name: "license",
            message: "Select the appropriate licenses:",
            choices: ["ApacheLicensev2.0", "GNUGeneralPublicLicensev3.0", "MITLicense", "N/A"],
        },
        {
            type: "input",
            name: "test",
            message: "What kind of tests instructions are needed for this project?"
        },
        {
            type: "input",
            name: "credits",
            message: "Please share who worked on or contributed to this project?"
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


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    promptUser().then((data) => {
        try {
            const Markdown = generateMarkdown(data);
            fs.writeFileSync("README.md", Markdown);
            console.log("Successfully wrote to README.md");
        } catch (error) {
            console.log(error);
        }
    });
};

// Function call to initialize app
init();
