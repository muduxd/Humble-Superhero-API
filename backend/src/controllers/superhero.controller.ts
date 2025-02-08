import type { Request, Response } from "express";
import type { ISuperheroModel } from "../models/superhero.model";
import { Superpower } from "../models/superhero.model";


const superheroes: ISuperheroModel[] = [];

export const getAllSuperheroes = async (
    _request: Request,
    response: Response<ISuperheroModel[]>
): Promise<void> => {
    const sortedSuperheroes = [...superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
    response.json(sortedSuperheroes);
}

export const addSuperhero = async (
    request: Request<{}, {}, ISuperheroModel>,
    response: Response<ISuperheroModel | { error: string }>
): Promise<void> => {
    const { name, superpower, humilityScore } = request.body;

    if (!name || name.length > 20) {
        response.status(400).json({ error: "Name must be between 1 and 20 characters!" });
        return;
    }

    if (!Object.values(Superpower).includes(superpower)) {
        response.status(400).json({ error: "Invalid superpower!" });
        return;
    }

    if (!Number.isInteger(humilityScore) || humilityScore < 1 || humilityScore > 10) {
        response.status(400).json({ error: "Humility score must be an integer between 1 and 10!" });
        return;
    }

    const superhero: ISuperheroModel = { name, superpower, humilityScore };
    superheroes.push(superhero);
    response.status(201).json(superhero);
}