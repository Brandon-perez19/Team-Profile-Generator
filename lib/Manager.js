import { pushObj } from "../src/page-template.js";
import { Employee } from "./Employee.js";

class Manager extends Employee {
    constructor(name, ID, email, OfficeNumber = " ") {
        super(name, ID, email)
        this.OfficeNumber = OfficeNumber
    }

    //refines obejct to be pushed to array
    createManagerObj() {
        var ManagerObj = {
            type: "Manager",
            name: this.name,
            ID: this.ID,
            email: this.email,
            OfficeNumber: this.OfficeNumber
        }
        //pushes object to function to push to array
        pushObj(ManagerObj);
    }
}

export { Manager }