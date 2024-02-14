const recipeSchema = `#graphql
    type Recipe {
        id: ID!
        title: String!
        ingredients: String
        preparation: String
        photo: String
    }

    input RecipeInput {
        title: String!
        ingredients: String
        preparation: String
        photo: String
    }

    extend type Query {
        recipes: [Recipe]
    }

    extend type Mutation {
        createRecipe(recipe: RecipeInput): Recipe
    }
`;

module.exports = recipeSchema;
