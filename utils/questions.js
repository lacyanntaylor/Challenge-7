const questions =  [
    {
        type:'input',
        name:'title',
        message:'What is the title of your application'
    },
    {

        type: 'input',
        name: 'description',
        message: 'What is the description of this application?',
    },
    {
        type: 'input',
        name: 'installations',
        message: 'What type of installations are needed for this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this application be used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['none', 'MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who will be contributing to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are required?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type:`input`,
        name: 'email',
        message: 'What is your email address?'
    }
]

export default questions