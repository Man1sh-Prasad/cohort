"use strict";
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const result = isLegal({ firstName: "Manish",
    lastName: "Prasad",
    age: 21
});
console.log(result);
