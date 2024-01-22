const users = {
    nama: 'Manish',
    age: 21,
    gender: 'male'
}

// JSON.parse
// JSON.stringify

const userOne = JSON.stringify(users);
console.log(userOne);

const employee = '{"name": "Manish", "age": 21, "gender":"male"}';
const userTwo = JSON.parse(employee);
console.log(employee.name);
