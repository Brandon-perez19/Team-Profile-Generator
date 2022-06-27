import { Employee } from "./Employee.js";

class Intern extends Employee {
    constructor(name, ID, email, school = " ") {
        super(name, ID, email)
        this.school = school
        
    }
}

export {Intern}