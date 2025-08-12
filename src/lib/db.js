import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/book");
    console.log(`Database connected `);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1); 
  }
};