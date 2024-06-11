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