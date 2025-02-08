export interface ISuperheroModel {
    name: string;
    superpower: Superpower;
    humilityScore: number;
}

export enum Superpower {
    DEBUG_WHISPERER, 
    TIME_COMPLEXITY_SAGE,
    LEGACY_CODE_TAMER,
    KEYBOARD_WARRIOR
}