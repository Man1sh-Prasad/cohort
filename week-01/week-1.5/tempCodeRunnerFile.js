

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];

  function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
  
    // const userExists = false;
    // for( let i=0; i<ALL_USERS.length; i++){
    //   if( ALL_USERS[i].username == username && ALL_USERS[i].password == password){
    //       userExists = true;
    //   }
    // }
    // return userExists;
    // write above code in find


    const userExists = ALL_USERS.find((user) => 
     user.username === username && user.password === password) !== undefined;
    return userExists;
    }
  

console.log(userExists('manisjkfk', '123321'));
  