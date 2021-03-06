// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "N/A") {
    return ("");
  } else {
    return (`![License](https://img.shields.io/badge/license-${license}-green)`)
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "N/A") {
    return ("");
  } else {
    return (`* <a href="#license">License</a>`)
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return ("");
  } else {
    return (`## License \n - This project is made under the ${license}.`)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title: ${data.title} 
  ${renderLicenseBadge(data.license)}

  
  ## Description
  - ${data.description}
  
  # Table of Contents
  
  * <a href="#installation">Installation</a>
  * <a href="#usage">Usage</a>
  ${renderLicenseLink(data.license)}
  * <a href="#contributing">Contributing</a>
  * <a href="#tests">Tests</a>
  * <a href="#questions">Questions</a>
  
  ## Installation
  - ${data.installation}
  
  ## Usage
  - ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  - ${data.credits}
  
  ## Tests
  - ${data.test}
  
  ## Questions
  - GitHub Username: ${data.username}
  - GitHub Link: https://github.com/${data.username}
  - Email Address: ${data.email}
  
  `;
}

module.exports = generateMarkdown;
