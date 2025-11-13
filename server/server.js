import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/db.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = process.env.PORT || 4000;

await connectDb();

const allowedOrigins = [""];

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
