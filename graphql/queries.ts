import { gql } from "@apollo/client";

export const GET_USERS = `gql
    query Users {
        users {
            id,
            name,
            userName,
            years,
            type
        }
    }
`

// export const GET_USER = `gql
//     query Users {
//         users {
//             id,
//             name,
//             userName,
//             years,
//             type {
//                 name,
//                 read,
//                 write,
//                 admin
//             }
//         }
//     }
// `


// type {
//     name,
//     read,
//     write,
//     admin
// }