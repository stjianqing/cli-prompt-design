#!/usr/bin/env node

const program = require('commander');
// const prompt = require('inquirer');

const generateImage = (prompt) =>{
    console.info(prompt);
};

const question = [{
    type: "input",
    name: "What kind of car do you want to produce?",
    message: 'Enter your prompt'
}];

program
    .version('1.0.0')
    .alias('v')
    .description('Client Management System')

program
    .command('image <prompt>')
    .alias('i')
    .description("Type in a prompt")
    .action((image) => {
        generateImage(image)
    });

// program
//     .command('image')
//     .alias('i')
//     .description("Type in a prompt")
//     .action(() => {
//         prompt(question).then(answer => generateImage(answer))
//     });

program.parse(process.argv);



