import inquirer from "inquirer";
import { Employee } from './Employee.js';

class Engineer extends Employee {
    constructor(name, ID, email, github = " ") {
        super(name, ID, email)
        this.github = github

    }

    addEngineer() {
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
                .then(() => {
                    console.log('information passed to engineer class')
                })
    }
}

export { Engineer }