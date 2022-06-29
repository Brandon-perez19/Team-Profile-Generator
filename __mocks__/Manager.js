import { Employee } from "../lib/Employee";

class Manager extends Employee {
    constructor(name, ID, email, OfficeNumber = " ") {
        super(name, ID, email)
        this.OfficeNumber = OfficeNumber
    }

    createManagerObj() {
        var ManagerObj = {
            type: "Manager",
            name: this.name,
            ID: this.ID,
            email: this.email,
            OfficeNumber: this.OfficeNumber
        }
        return ManagerObj
    }
}

export { Manager }