
const inquirer = require('inquirer');

const fs = require('fs');

inquirer 
    .prompt([
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitname'
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'emailname'
    },    
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage Information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'list',
        message: 'Choose License?',
        choices: ['MIT', 'ISC', 'GPL', 'APACHE2.0'],
        name: 'license'
    }
    ]).then((data) => {

var READMECONTENT = `
# Project: ${data.title} 
# License: ![License Image](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description: 
${data.description}

### Table of Contents:
* [Installation](#Installation)
* [Usage Information](#Usage)
* [Contribution Guidelines](#Contribution)

### Installation: 
${data.installation}

### Usage:
${data.usage}

### Contribution:
${data.contribution}

### Questions:
For any questions, please e-mail me at [Contact Us](mailto:${data.emailname})

### Github Profile:
https://github.com/${data.gitname}

`
console.log(READMECONTENT)

        fs.writeFile("./output/README.md", READMECONTENT, (err) => {
            err ? console.error(err) : console.log('Success!')
        })
 })