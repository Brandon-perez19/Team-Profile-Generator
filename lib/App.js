import inquirer from 'inquirer';
import {Employee} from '../lib/Employee.js'
import {Engineer} from '../lib/Engineer.js'
import {Intern} from '../lib/Intern.js'
import {Manager} from '../lib/Manager.js';

function Generator () {
    this.isIntern = false
    this.intern
    this.employee
    this.manager = new Manager();
    this.engineer
    this.employees = []
}

Generator.prototype.initializeGenerator = function() {
    
    inquirer
    .prompt([{
    //     type: 'text',
    //     name: 'loginName',
    //     message: "Please enter Manager's Name.",
    //     validate: nameInput => {
    //         if (nameInput == this.manager.name){
    //             return true;
    //         } else {
    //             console.log("Incorrect Name, Please Enter Manager's Name")
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'text',
    //     name: 'loginId',
    //     message: "Please enter Manager's Employee Id.",
    //     validate: IdInput => {
    //         if (IdInput == this.manager.ID){
    //             return true;
    //         } else {
    //             console.log("Incorrect Employee Id, Please Enter Manager's Employee Id")
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'text',
    //     name: 'loginEmail',
    //     message: "Please enter Manager's Email.",
    //     validate: EmailInput => {
    //         if (EmailInput == this.manager.email){
    //             return true;
    //         } else {
    //             console.log("Incorrect Email Address, Please Enter Manager's Email Address")
    //             return false;
    //         }
    //     }
    // },
    // {
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
    .then (() => {
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
        if(options == 'Add an Intern'){
            this.isIntern = true;
            this.addEmployee();
        } else if (options == 'Add an Engineer'){
            this.isIntern = false;
            this.addEmployee();
        } else {
            console.log('You have finished your team')
        }
    })
};

Generator.prototype.addEmployee = function(){
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "What is the Employee's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Employee's name is required.")
                            return false;
                        }
                    }
                }, {
                    type: 'text',
                    name: 'ID',
                    message: "What is the Employee's ID?",
                    validate: IDinput => {
                        if (IDinput) {
                            return true;
                        } else {
                            console.log("Employee ID is required.")
                            return false;
                        }
                    }
                }, {
                    type: 'text',
                    name: 'email',
                    message: "What is the Employee's email?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Employee email is required")
                            return false;
                        }
                    }
                }])
                .then(({ name, ID, email})=> {
                    if(this.isIntern == true){
                        this.addIntern(name, ID, email);
                    } else {
                        this.addEngineer(name, ID, email);
                    }
                })
}

Generator.prototype.addIntern = function(name, ID, email) {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'school',
                message: "What is the Intern's University?",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("A University name is required for an Intern")
                        return false;
                    }
                }
            }])
        .then(({school}) => {
            this.intern = new Intern(name, ID, email, school);
            console.log('Intern Added!');
            this.employees.push(this.intern);
            console.log(this.employees);
            this.MainMenu();
        })
}

Generator.prototype.addEngineer = function (name, ID, email) {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'github',
                message: "What is the Engineer's github username?",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("A Github is required for an Engineer")
                        return false;
                    }
                }
            }])
        .then(({github}) => {
            this.engineer = new Engineer(name, ID, email, github)
            console.log('Engineer Added!');
            this.employees.push(this.engineer);
            console.log(this.employees);
            this.MainMenu();
        })
}

export {Generator}