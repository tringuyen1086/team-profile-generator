const Employee = require("./employee")

// MANAGER
class Manager extends Employee {

    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
        this.title = "Manager"

    }
    getOfficeNum() {
        return this.officeNum;

    }
    getRole() {
        return this.title;
    }
}
module.exports = Manager