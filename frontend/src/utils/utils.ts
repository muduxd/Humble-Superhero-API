import { Superpower } from "../models/Superhero.model";

export const convertSuperpowerToString = (superpower: number) => {
    return Superpower[superpower]
        .split("_")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}