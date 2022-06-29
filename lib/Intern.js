import { Employee } from "./Employee.js";
import { pushObj } from "../src/page-template.js"

class Intern extends Employee {
    constructor(name, ID, email, school = " ") {
        super(name, ID, email)
        this.school = school
    }

    //refines intern object to pass to an array 
    createInternObj() {
        var InternObj = {
            type: "Intern",
            name: this.name,
            ID: this.ID,
            email: this.email,
            school: this.school
        }
       //pushes object to function to push to array
        pushObj(InternObj);
    }
};

export { Intern }