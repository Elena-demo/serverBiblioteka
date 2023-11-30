import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { selectBook, insertBook } from "./controller/user.controller.js";
import router from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);

app.get("/", function (req, res) {
  res.send("hello world");
});
app.post("/insert_book", insertBook);

app.listen(3000, () => console.log("server started port 3000"));
