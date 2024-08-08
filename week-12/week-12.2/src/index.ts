// interface User {
//     name: string,
//     age: number
// }

// function sumOfAge(userOne: User, userTwo: User) {
//     return userOne.age + userTwo.age
// }

// const age = sumOfAge({name: 'Manish', age: 22}, {name: 'Prasad', age: 22})
// console.log(age)


// -----------------------------------------------------------------

// 1. Pick - it allows you to create a new type by selecting a set of properties
//        (keys) from an existing (type)

/**
interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(user: UpdateProps) {
    // hit the database to update the user -name, age, password
}

 */




// ----------------------------------------------------------------------

// 2. Partial - it makes all properties of a type optional, creating a type with the same properties
//              but each marked as option

/**
interface User {
    id: string,
    name: string,
    age: string,
    email: string,
    password: string
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(UpdateProps: UpdatePropsOptional) {
    // hit the db and update the user
}

updateUser({name: 'Manish', })
 */


// ------------------------------------------------------------------

// 3. Readonly - when u have a configuration object that should not be altered after
//               initialisation, making it Randomly ensures its properties connot be 
//               changed


/**
interface Config {
     endpoint: string,
     apikey: string
}

const config: Readonly<Config> = {
    endpoint: 'https://example.com',
    apikey: 'dlaje564557fs8af7d'
}
// config.apikey = 'ldsflkj'

// ** you can use readonly in object aslo
type User = {
    readonly name: 'Manish'
}
 */


// -----------------------------------------

// 4. Record and Map

// ** Record lets u give a cleaner object 


// type User = {
//     id: string,
//     username: string
// }

// type Users = {
//     [key: string]: User
// }

// const users: Users = {
//     'abc123': {
//         id: 'abc123',
//         username: 'Manish'
//     },
//     'pqr123': {
//         id: 'pqr123',
//         username: 'Prasad'
//     }
// }

// by using Record
/** 
type User = {
    id: string,
    username: string
}

type Users = Record<string, User>

const users: Users = {
    'abc123': {
        id: 'abc123',
        username: 'Manish'
    },
    'pqr123': {
        id: 'pqr123',
        username: 'Prasad'
    }
}

*/

// map - maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

/**
interface User {
    id: string,
    name: string
}

const usersMap = new Map<string, User>()

// add users to the map using .set
usersMap.set('abc123', {id: 'abc123', name: 'Manish'})
usersMap.set('prq123', {id: 'prq123', name: 'Manish'})

// to get a value
const user = usersMap.get('abc123')
 */



// ----------------------------------------------

// 5. Exclude - In a function that can accept several types of inputs but you 
//              want to exclude specific types from being passed to it.

/**
type Eventype = 'click' | 'scroll' | 'mouseover'

type ExcludeEvent = Exclude<Eventype, 'scroll'>

const handleEvent = (event: ExcludeEvent) => {
    console.log('handling event: ' + event)
}
handleEvent('click')

 */


