import cors from "cors";
import express, { Request, Response } from "express";
import superheroRouter from "./routers/superhero.router";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.use(superheroRouter);



app.all("*", (_request: Request, response: Response): void => {
    response.status(404).json({ error: "Route not found!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});