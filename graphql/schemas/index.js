const user = require("./userSchema");

const squema = `#graphql
    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    ${user}
`;

module.exports = squema;
