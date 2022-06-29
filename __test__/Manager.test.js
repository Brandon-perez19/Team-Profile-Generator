import { Manager } from "../__mocks__/Manager.js";

test('creates an Manager object', () => {
    const manager = new Manager('Jimmy',1,'jimmy@aol.com',817);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.ID).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.OfficeNumber).toEqual(expect.any(Number));
})


test('recreates engineer object to be pushed into array', () => {
    const manager = new Manager('Jimmy',1,'jimmy@aol.com',817);
    const ManagerObjTest = manager.createManagerObj()
    
    expect(ManagerObjTest).toStrictEqual(
        {
            type:'Manager',
            name: 'Jimmy',
            ID: 1,
            email: 'jimmy@aol.com',
            OfficeNumber: 817
        })

})