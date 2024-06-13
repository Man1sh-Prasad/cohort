// type User = {
//     firstname: string;
//     lastname: string;
//     age: number
// }

// function isLegal(user: User): boolean {
//     return user.age >= 18;
// }


// 1. Unions ---------------------

type GreetArgs = number | string

function greet(id: GreetArgs) {
    console.log(id)
}

greet(1);
greet("1")

// 2. Intersection ---------------

type  Employee = {
    name: string;
    startDate: Date;
}

interface Manager {
    name: string;
    department: string;
}

type TechLead = Employee & Manager;

const t: TechLead = {
    name: "Manish",
    startDate: new Date(),
    department: "frontend"
}
