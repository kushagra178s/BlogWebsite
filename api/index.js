import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import express from 'express';
import postRouter from './routes/posts.js';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/src/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  console.log('uploaded');
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api/posts', postRouter);

app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);

app.listen(8800, () => {
  console.log('Connected @ port 8800!');
});