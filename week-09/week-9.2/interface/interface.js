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

// class thats implement this inferface
var Employee = /** @class */ (function () {
    function Employee(n, a) {
        this.name = n;
        this.age = a;
    }
    Employee.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Employee;
}());
var e = new Employee("Manish", 21);
e.greet("hello");
