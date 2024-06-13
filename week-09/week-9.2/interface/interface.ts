// interface   
/**
interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string              // question mark indicates email is optional
}

function isLegal(user: User): boolean {
    if(user.age >= 18) {
        return true
    } else {
        return false
    }
}

const result = isLegal({firstName: "Manish",
    lastName: "Prasad",
    age: 21
})
console.log(result)
 */

// implementing interface ______
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// class thats implement this inferface
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("Manish",  21)
e.greet("hello")