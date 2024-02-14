require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/schemas/index");
const resolvers = require("./graphql/resolvers/index");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const uri = process.env.DATABASE_URL;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Connected to MongoDB");
    server.applyMiddleware({ app });
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

server.start().then(() => {
  console.log("Apollo Server started");
});
