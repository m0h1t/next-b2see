export const GET_USERS = `gql
    mutation {
        users {
            id,
            name,
            userName,
            years,
            type
        }
    }
`