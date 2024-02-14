const { userQueries, userMutations } = require("./userResolver");
const { recipeQueries, recipeMutations } = require("./recipeResolver");

const resolvers = {
  Query: {
    ...userQueries,
    ...recipeQueries,
  },
  Mutation: {
    ...userMutations,
    ...recipeMutations,
  },
};

module.exports = resolvers;
