const userSchema = `#graphql
    type User {
        userId: ID!
        email: String!
        password: String!
        name: String
        photo: String
    }

    type AuthUser {
        userId: String!
        email: String!
        token: String!
    }
    
    input UserInput {
        name: String,
        email: String!
        password: String!
        photo: String
    }

    extend type Query {
        users: [User]
    }

    extend type Mutation {
        createUser(user: UserInput): AuthUser
    }
`;

module.exports = userSchema;
