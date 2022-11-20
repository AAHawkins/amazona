import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

colors.enable();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use((error, req, res, next) => {
  res.status(500).send({ message: error.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started port:${port}`);
});
