import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.DATABASE;

if (!database) {
  console.error("DATABASE environment variable is not set.");
  process.exit(1);
}

async function connectToDatabase(): Promise<void> {
  try {
    await mongoose.connect(database);
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

export default connectToDatabase;
