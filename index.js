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
    type: 'list',
    message: 'Installation instructions?',
    choices: ['ndm i inquirer'],
    name: 'installation'
},
{
    type: 'input',
    message: 'Usage Information?',
    name: 'usage'
},
{
    type: 'input',
    message: 'Contributors?',
    name: 'contribution'
},
{
    type: 'list',
    message: 'Test Instructions?',
    choices: ['npm test'],
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
        const fileName = 'READMEoutput.md';
        writeToFile(fileName, data)
    })
}


// Function call to initialize app
init();
