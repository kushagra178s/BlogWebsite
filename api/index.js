import express from "express";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), function (req, res) {

  console.log("uploaded");
  const file = req.file;
  // console.log(file);
  res.status(200).json(file.filename);
});


app.use("/api/posts", postRouter);

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("Connected @ port 8800!");
});
