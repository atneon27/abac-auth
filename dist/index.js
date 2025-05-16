import express from "express";
import cors from "cors";
import { port } from "./config/env.js";
import projectRouter from "./routes/projectRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/project", projectRouter);
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Hello"
    });
});
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
