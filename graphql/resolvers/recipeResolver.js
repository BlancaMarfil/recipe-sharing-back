const Recipe = require("../../models/recipe");

const recipeQueries = {
  recipes: async () => {
    try {
      const recipesFetched = await Recipe.find();
      return recipesFetched.map((recipe) => {
        return {
          ...recipe._doc,
        };
      });
    } catch (error) {
      throw error;
    }
  },
};

const recipeMutations = {
  createRecipe: async (_, args) => {
    try {
      const recipe = new Recipe(args.recipe);
      return await recipe.save();
    } catch (error) {
      throw error;
    }
  },
};

module.exports = { recipeQueries, recipeMutations };
