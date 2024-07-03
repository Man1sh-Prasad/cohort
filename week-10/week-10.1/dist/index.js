"use strict";
// write a function to create a users table in your database.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const client = new Client({
//   connectionString: "postgresql://prasadmanish467:5DBtV2xMzPYK@ep-fragrant-truth-a505vjqm.us-east-2.aws.neon.tech/testdb?sslmode=require"
// })
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }
// createUsersTable();
//---------------------------------------------------------
// write a function to insert data in the table 
// async function insertData(username: string, email: string, password: string) {
//     const client = new Client({
//         connectionString: "postgresql://prasadmanish467:5DBtV2xMzPYK@ep-fragrant-truth-a505vjqm.us-east-2.aws.neon.tech/testdb?sslmode=require"
//     })
//     try {
//         await client.connect()
//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)"
//         const values = [username, email, password]
//         const res = await client.query(insertQuery, values)
//         console.log("insertion success: ", res)
//     } catch (err) {
//         console.log('Error while insertion', err)
//     } finally {
//         await client.end()
//     }
// }
// insertData('manish', 'manish@gmail.com', 'manish123')
// _________________________________________________________-
// async function to fetch user data from the database given an email
// async function getUser(email: string) {
//     const client = new Client({
//         connectionString: "postgresql://prasadmanish467:5DBtV2xMzPYK@ep-fragrant-truth-a505vjqm.us-east-2.aws.neon.tech/testdb?sslmode=require"
//     })
//     try {
//         await client.connect()   // ensure client connection is established
//         const query = `SELECT * FROM users WHERE email = $1`
//         const value = [email]
//         const result = await client.query(query, value)
//         if(result.rows.length > 0 ) {
//             console.log('User Found: ', result.rows[0])
//             return result.rows[0]  // return the user data
//         } else {
//             console.log('No user found with the given email')
//             return null
//         }
//     } catch (err) {
//         console.log('Error during fetching user', err)
//     } finally {
//         await client.end()  // close the client connection
//     }
// }
// getUser('manish@gmail.com').catch(console.error)
//--------------------------------------------------------------------
// async function createAddressTable() {
//     const client = new Client({
//         connectionString: "postgresql://prasadmanish467:5DBtV2xMzPYK@ep-fragrant-truth-a505vjqm.us-east-2.aws.neon.tech/testdb?sslmode=require"
//     })
//     try {
//         await client.connect()
//         const results = await client.query(`
//             CREATE TABLE addresses (
//             id SERIAL PRIMARY KEY,
//             user_id INTEGER NOT NULL,
//             city VARCHAR(100) NOT NULL,
//             country VARCHAR(100) NOT NULL,
//             street VARCHAR(255) NOT NULL,
//             pincode VARCHAR(20),
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//             FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//             )  
//         `)
//         console.log(results)
//         insert data in table 
//     } catch(err) {
//         console.log('error whiile creating table', err)
//     } finally {
//         await client.end()
//     }
// }
// createAddressTable();
//________________________________________________
// write a function to insert data in the table 
function insertAddress(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://prasadmanish467:5DBtV2xMzPYK@ep-fragrant-truth-a505vjqm.us-east-2.aws.neon.tech/testdb?sslmode=require"
        });
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)";
            const values = [user_id, city, country, street, pincode];
            const res = yield client.query(insertQuery, values);
            console.log("insertion success: ", res);
        }
        catch (err) {
            console.log('Error while insertion', err);
        }
        finally {
            yield client.end();
        }
    });
}
insertAddress('1', 'Bargarh', 'India', '13', '768028');
