import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/userRoutes";
import authentication from "./middlewares/authentication";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const PORT: number = Number(process.env.PORT) || 3001;

// CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin || "*");
    },
    credentials: true,
  })
);

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(authentication);

// Routes
app.use("/", router);

// Start server
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));

export default app;
