import {Intern} from '../__mocks__/Intern'

test('creates an Intern object', () => {
    const intern = new Intern('Alex', 3, 'Alex@gmail.com', 'FSU');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.ID).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String));
})

test('recreates engineer object to be pushed into array', () => {
    const intern = new Intern('Alex', 3, 'Alex@gmail.com', 'FSU');
    
    expect(intern.createInternObj()).toStrictEqual(
        {
            type:'Intern',
            name: 'Alex',
            ID: 3,
            email: 'Alex@gmail.com',
            school: 'FSU'
        })
    
})