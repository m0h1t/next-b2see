export const typeDefs = `#graphql

type User {
    id: ID!
    userName: String,
    name: String,
    years: Int
    type: UserRoleType
}

type UserRoleType {
    name: String,
    read: Boolean,
    write: Boolean,
    admin: Boolean
}

type Query {
    users: [User]
    user(id: ID, userName: String): User
}

# type Mutations {
#     addUser(user: User): User,
#     updateUser(user: User): User,
#     deleteUser(userId: ID!): void
# }
`