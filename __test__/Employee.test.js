import { Employee } from "../lib/Employee.js";


test('creates an Employee object', () => {
    const employee = new Employee('dave', 1, 'dave@aol.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.ID).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})