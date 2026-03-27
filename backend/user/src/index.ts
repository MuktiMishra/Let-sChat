import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { createClient } from "redis";
import userRoutes from './routes/user.js'
import { connectRabbitMQ } from "./config/rabbitmq.js";
import cors from "cors";

dotenv.config();
connectDB();

connectRabbitMQ();

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error("REDIS_URL missing");
}

export const redisClient = createClient({ url: redisUrl });

redisClient.connect()
.then(()=> console.log("Connected to redis"))
.catch(console.error);

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // your frontend
  credentials: true
}));
app.use(express.json());
app.use("/api/v1", userRoutes);
const port = 5000;


app.listen(port , ()=>{
    console.log("Server is running on port 5000");
})