import { Employee } from './Employee.js';

class Engineer extends Employee {
    constructor(name, ID, email, github = " ") {
        super(name, ID, email)
        this.github = github

    }
}

export { Engineer }