// how do you ensure that this user has access to aa certain resouorce
    // dumb way- Ask the user to send useranme and password in all request as headers
    // 
    // slightly better way -
        // 1. give the user back a token on signup/login
        // 2. ask the user to send back the token in all future requests
        // 3. when the user logs out, ask the user to forgot the token (or revoke it from the backend)

