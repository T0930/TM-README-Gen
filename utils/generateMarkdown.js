// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === "ECLIPSE"){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === "APACHE2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
      if (license === "None"){
        return ``
      } else {
        return `***This application is covered under the ${license} license***`
      }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      if (license === "None"){
        return ``
      } else {
        return `## License:
        ${renderLicenseLink(license)}`
      }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project: ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description: 
  ${data.description}
  
  ## Table of Contents:
  * [Installation](#Installation-Instructions)
  * [Test Instructions](#Test-Instructions)
  * [Usage Information](#Usage)
  * [Contributors](#Contributors)
  * [Questions/Contact](#Questions)
  
  ## Installation Instructions: 
  ${data.installation}
  
  ## Test Instructions:
  ${data.testIns}
  
  ## Usage:
  
  ${data.usage}
  
  ## Contributors:
  ${data.contribution}

  ## Questions:
  For any questions, please e-mail me at [${data.emailname}](mailto:${data.emailname})
  
  ### Github Profile:
  https://github.com/${data.gitname}

  ${renderLicenseSection(data.license)}

  
`;
}

module.exports = generateMarkdown;
