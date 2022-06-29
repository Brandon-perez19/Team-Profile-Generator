import inquirer from 'inquirer';
import { createFile } from '../utils/generate-site.js'
import { Engineer } from '../lib/Engineer.js'
import { Intern } from '../lib/Intern.js'
import { Manager } from '../lib/Manager.js';
import { Markdown } from '../src/page-template.js';

//properties of Generator Function
function Generator() {
    this.isIntern = false
    this.intern
    this.engineer
    this.manager
}
//starts the application by getting Manager's information before heading to main menu
Generator.prototype.initializeGenerator = function () {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "Please enter Manager's Name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please Enter Manager's Name")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'ID',
            message: "Please enter Manager's Employee Id.",
            validate: IdInput => {
                if (IdInput) {
                    return true;
                } else {
                    console.log("Please Enter Manager's Employee Id")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter Manager's Email.",
            validate: EmailInput => {
                if (EmailInput) {
                    return true;
                } else {
                    console.log("Please Enter Manager's Email Address")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'OfficeNumber',
            message: "Please enter Manager's Office.",
            validate: OfficeInput => {
                if (OfficeInput) {
                    return true;
                } else {
                    console.log("Please Enter Manager's Office Number")
                    return false;
                }
            }
        }])
        //destructures object to grab values from it
        .then(({ name, ID, email, OfficeNumber }) => {
            //passes it to Manager class to create manager Object
            this.manager = new Manager(name, ID, email, OfficeNumber)
            //refines object to pass to an employee array
            this.manager.createManagerObj(this.manager)
            console.log("You're now logged in!")
            //calls main menu function
            this.MainMenu();
        })
};

//main menu function
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
        .then(({ options }) => {
            if (options == 'Add an Intern') {
                //by default, is intern is false, switches value based on seclection to ask either for github or school information
                this.isIntern = true;
                this.addEmployee();
            } else if (options == 'Add an Engineer') {
                this.isIntern = false;
                this.addEmployee();
            } else {
                console.log('You have finished your team. Visit the dist folder to view your file!')
                //creates html file
                createFile(Markdown())
            }
        })
};

//general add employee function
Generator.prototype.addEmployee = function () {
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
            //switch to alternate which route the user will go
        .then(({ name, ID, email }) => {
            if (this.isIntern == true) {
                this.addIntern(name, ID, email);
            } else {
                this.addEngineer(name, ID, email);
            }
        })
}
//asks for interns school. Carries values from employee function
Generator.prototype.addIntern = function (name, ID, email) {
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
        .then(({ school }) => {
            //creates new intern class object
            this.intern = new Intern(name, ID, email, school);
            //refines object to be passed to an array
            this.intern.createInternObj(this.intern);
            console.log('Intern Added!');
            //calls mainmenu
            this.MainMenu();
        })
}
//asks for engineers github
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
        .then(({ github }) => {
            //creates engineer object
            this.engineer = new Engineer(name, ID, email, github)
            console.log('Engineer Added!');
            //refines to pass to an array
            this.engineer.createEngineerObj(this.engineer);
            //calls main menu function
            this.MainMenu();
        })
}

export { Generator }