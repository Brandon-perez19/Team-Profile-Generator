
import inquirer from 'inquirer';
// import Employee from '../lib/Employee.js'
// import Engineer from '../lib/Engineer.js'
// import Intern from '../lib/Intern.js'
import {Manager} from '../lib/Manager.js';

function Generator () {
    this.engineers = [];
    this.interns = []
    this.manager = new Manager()
}

Generator.prototype.initializeGenerator = function() {
    
    inquirer
    .prompt([{
        type: 'text',
        name: 'loginName',
        message: "Please enter Manager's Name.",
        validate: nameInput => {
            if (nameInput == this.manager.name){
                return true;
            } else {
                console.log("Incorrect Name, Please Enter Manager's Name")
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'loginId',
        message: "Please enter Manager's Employee Id.",
        validate: IdInput => {
            if (IdInput == this.manager.ID){
                return true;
            } else {
                console.log("Incorrect Employee Id, Please Enter Manager's Employee Id")
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'loginEmail',
        message: "Please enter Manager's Email.",
        validate: EmailInput => {
            if (EmailInput == this.manager.email){
                return true;
            } else {
                console.log("Incorrect Email Address, Please Enter Manager's Email Address")
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'loginOffice',
        message: "Please enter Manager's Office.",
        validate: OfficeInput => {
            if (OfficeInput == this.manager.officeNumber){
                return true;
            } else {
                console.log("Incorrect Office Number, Please Enter Manager's Office Number")
                return false;
            }
        }
    }]) 
    .then (({ loginName, loginId, loginEmail, loginOffice }) => {
        console.log("You're now logged in!")
        this.MainMenu();
    })
};

Generator.prototype.MainMenu = function () {
    console.log(
    `
    ==============================
        Team-Profile-Generator
    ==============================`
    );

    inquirer
    .prompt([{
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
    }])
    .then(({ options}) => {
        if (options == 'Add an Engineer'){
            console.log('You have choosen to add an Engineer')

        } else if (options == 'Add an Intern') {
            console.log('You have choosen to add an Intern')

        } else {
            console.log('You have choosen to finish building your team.')

        }
    })
}

export {Generator}