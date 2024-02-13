const userSchema = `#graphql
    type User {
        userId: ID!
        email: String!
        photo: String
    }

    extend type Query {
        users: [User]
    }
`;

module.exports = userSchema;
