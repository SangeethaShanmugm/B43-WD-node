import express from "express";
import {
  getAllBooks,
  getBookById,
  deleteBookById,
  addBooks,
  updateBookById,
} from "../helper.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

//REST ENDPOINTS
router.get("/", auth, async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);
  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const book = await getAllBooks(req);
  res.send(book);
});

//get books by id
router.get("/:id", auth, async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  //db.books.findOne({id: 004})
  const book = await getBookById(id);
  res.send(book);
});

//delete books by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const book = await deleteBookById(id);
  res.send(book);
});

//Add books
//inbuild middleware
//say data is in json
router.post("/", async (req, res) => {
  const newBook = req.body;
  console.log(newBook);
  const result = await addBooks(newBook);
  res.send(result);
});

//put method - update

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  console.log(updatedBook);
  const result = await updateBookById(id, updatedBook);
  res.send(result);
});

export const booksRouter = router;
