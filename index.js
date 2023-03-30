// const express = require("express"); //3rd party package
// const { MongoClient } = require("mongodb");
import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { booksRouter } from "./routes/books.js";
import { usersRouter } from "./routes/users.js";
import bcrypt from "bcrypt";
import cors from "cors"

const app = express();

app.use(cors())
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT;
//interceptor /converting body to json

const MONGO_URL = process.env.MONGO_URL;

//Mongo connection
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is connected");
  return client;
}

export const client = await createConnection();
// req => what we send to Server
// res => what we receive from server

app.get("/", function (req, res) {
  res.send("Hello Everyone🥳");
});

app.use("/books", booksRouter);

app.use("/users", usersRouter);

app.listen(PORT, () => console.log("Server started on PORT:", PORT));
