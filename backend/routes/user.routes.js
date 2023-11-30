import { Router } from "express";
import {
  selectBook,
  insertBook,
  selectBookID,
  deleteBook,
  updateBook,
} from "../controller/user.controller.js";

const router = new Router();

router.get("/book", selectBook);
router.get("/book/:id", selectBookID);
router.delete("/book/:id", deleteBook);
router.put("/book", updateBook);

// router.post("/insert_book", insertBook);

export default router;
