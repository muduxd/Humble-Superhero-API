import express from "express";
import { addSuperhero, getAllSuperheroes } from "../controllers/superhero.controller";

const router = express.Router();

router.get("/superheroes", getAllSuperheroes);
router.post("/superheroes", addSuperhero);

export default router;