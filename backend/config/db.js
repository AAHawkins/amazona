import mongoose from 'mongoose';

export default async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Mongo DB: ${conn.connection.host}`.magenta.bold);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
