import { Engineer } from "../__mocks__/Engineer"

test('creates an Engineer object', () => {
    const engineer = new Engineer('Brandon', 2, 'Brandon@gmail.com', 'brandon-perez19');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.ID).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String));
})

test('recreates engineer object to be pushed into array', () => {
    const engineer = new Engineer('Brandon', 2, 'Brandon@gmail.com', 'brandon-perez19');
    const engineerObjTest = engineer.createEngineerObj();
    expect((engineerObjTest)).toStrictEqual(
        {
            type:'Engineer',
            name: 'Brandon',
            ID: 2,
            email: 'Brandon@gmail.com',
            github: 'brandon-perez19'
        })
})