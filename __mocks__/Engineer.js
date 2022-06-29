import { Employee } from "../lib/Employee";

class Engineer extends Employee {
    constructor(name, ID, email, github = " ") {
        super(name, ID, email)
        this.github = github
    }

    createEngineerObj() {
        var EngineerObj = {
            type: "Engineer",
            name: this.name,
            ID: this.ID,
            email: this.email,
            github: this.github,
        }
        return EngineerObj;
    }
};
export { Engineer }