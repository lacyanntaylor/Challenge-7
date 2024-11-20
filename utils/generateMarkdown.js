import { writeFile } from 'fs';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (!license || license === 'None') {
 return '';
}
const badges = {
  MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
  'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
  'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)',
};

return badges[license] || '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license ==='None') {
    return '';
  }
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return licenseLinks[license] || '';
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return 
  `Licenses: [${license}](${renderLicenseSection(license)}).`
  ;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const tableContent = `
| Feature          | Description             
|------------------|-------------------------
| Title            | ${data.title}          
| Description      | ${data.description}    
| Installation     | ${data.installations}  
| Usage            | ${data.usage}          
| Contributors     | ${data.contributors}   
| Tests            | ${data.tests}          
| GitHub           | ${data.github}         
| Email            | ${data.email}          
  `;

  const output = `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installations}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
For questions, you can reach out at:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

## Features
${tableContent}
`;

  writeFile('./README2.md', output, err =>
    err ? console.log(err) : console.log('README2.md created!')
  );
}












export default generateMarkdown;


