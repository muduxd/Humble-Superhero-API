"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSuperhero = exports.getAllSuperheroes = void 0;
const superhero_model_1 = require("../models/superhero.model");
const superheroes = [];
const getAllSuperheroes = async (_request, response) => {
    const sortedSuperheroes = [...superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
    response.json(sortedSuperheroes);
};
exports.getAllSuperheroes = getAllSuperheroes;
const addSuperhero = async (request, response) => {
    const { name, superpower, humilityScore } = request.body;
    if (!name || name.length > 20) {
        response.status(400).json({ error: "Name must be between 1 and 20 characters!" });
        return;
    }
    if (!Object.values(superhero_model_1.Superpower).includes(superpower)) {
        response.status(400).json({ error: "Invalid superpower!" });
        return;
    }
    if (!Number.isInteger(humilityScore) || humilityScore < 1 || humilityScore > 10) {
        response.status(400).json({ error: "Humility score must be an integer between 1 and 10!" });
        return;
    }
    const superhero = { name, superpower, humilityScore };
    superheroes.push(superhero);
    response.status(201).json(superhero);
};
exports.addSuperhero = addSuperhero;
