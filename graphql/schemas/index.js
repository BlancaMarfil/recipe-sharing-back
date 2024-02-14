const user = require("./userSchema");
const recipe = require("./recipeSchema");

const squema = `#graphql
    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    ${user}
    ${recipe}
`;

module.exports = squema;
