import { pushObj } from "../src/page-template.js";
import { Employee } from './Employee.js'

class Engineer extends Employee {
    constructor(name, ID, email, github = " ") {
        super(name, ID, email)
        this.github = github
    }

    //refines engineer obj to pass to an array
    createEngineerObj() {
        var EngineerObj = {
            type: "Engineer",
            name: this.name,
            ID: this.ID,
            email: this.email,
            github: this.github,
        }
        //pushes object to function to push to array
        pushObj(EngineerObj);
    }
};
export { Engineer }