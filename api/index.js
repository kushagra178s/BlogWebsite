import express from "express";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRouter);

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("Connected @ port 8800!");
});
