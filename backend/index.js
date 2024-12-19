import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
dotenv.config();

const app = express();
const options = {
    origin: process.env.BASE_URL,
    credentials: true
}
app.use(express.json());
app.use(cors(options));
app.use("/api/users", userRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

