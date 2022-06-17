// Global require's
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// Array of questions to ask the user
const questions = [
  // Name of project
  {
    type: "input",
    name: "title",
    message: "What is the project title? (Required field)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You must enter a title to continue");
        return false;
      }
    },
  },
  // Project description
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required field)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to provide a project description!");
        return false;
      }
    },
  },
  // How to install
  {
    type: "input",
    name: "installation",
    message: "How do you install your project? (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("You need to provide installation info to continue!");
        return false;
      }
    },
  },

  // License Options
  {
    type: "checkbox",
    name: "licensing",
    message: "Choose a license for your project (Required)",
    choices: [
      "Apache",
      "MIT",
      "Mozilla-Public",
      "GNU-General-Public",
      "Common-Development-and Distribution",
      "None",
    ],
    validate: (licensingInput) => {
      if (licensingInput) {
        return true;
      } else {
        console.log("You must pick a license for the project!");
        return false;
      }
    },
  },

  // Usage Information
  {
    type: "input",
    name: "usage",
    message: "How do you use this project? (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("You need to provide information on how to use project!");
        return false;
      }
    },
  },
  // Contribution Guidelines
  {
    type: "input",
    name: "contribution",
    message: "How should people contribute to this project? (Required)",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log(
          "You need to provide information on how to contribute to the project!"
        );
        return false;
      }
    },
  },
  // Test Instructions
  {
    type: "input",
    name: "testing",
    message: "How do you test this project? (Required)",
    validate: (testingInput) => {
      if (testingInput) {
        return true;
      } else {
        console.log("You need to describe how to test this project!");
        return false;
      }
    },
  },

  // Github Username
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  // Email Address
  {
    type: "input",
    name: "email",
    message: "Would you like to include your email?",
  },
];

// Function to write to the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Success! Information transferred to the README!");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
