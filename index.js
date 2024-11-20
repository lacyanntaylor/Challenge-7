import inquirer from 'inquirer';
import { questions, generateMarkdown } from './utils/index.js';

inquirer.prompt(questions).then(generateMarkdown)