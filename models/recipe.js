const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const recipeSchema = new mongoose.Schema({
  recipeId: {
    type: String,
    required: true,
    default: uuidv4().slice(0, 12),
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
  },
  preparation: {
    type: String,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
