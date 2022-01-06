// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [ {
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
    type: 'input',
    message: 'Test Instructions?',
    name: 'testIns'
},
{
    type: 'list',
    message: 'Choose License?',
    choices: ['MIT', 'ISC', 'ECLIPSE', 'APACHE2.0', 'None'],
    name: 'license'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const fileName = 'README.md';
        writeToFile(fileName, data)
    })
}


// Function call to initialize app
init();
