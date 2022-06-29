import { Employee } from "../lib/Employee";
class Intern extends Employee {
    constructor(name, ID, email, school = " ") {
        super(name, ID, email)
        this.school = school
    }

    createInternObj() {
        var InternObj = {
            type: "Intern",
            name: this.name,
            ID: this.ID,
            email: this.email,
            school: this.school
        }
        return InternObj
    }
}

export {Intern}