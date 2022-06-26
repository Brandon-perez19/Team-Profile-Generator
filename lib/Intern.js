import inquirer from "inquirer";
import { Employee } from "./Employee.js";

class Intern extends Employee {
    constructor(name, ID, email, school = " ") {
        super(name, ID, email)
        this.school = school
    }

    addIntern() {
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
            .then(() => {
                console.log('information passed to Intern class')
            })
    }
}

export {Intern}