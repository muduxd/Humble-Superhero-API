"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const superhero_router_1 = __importDefault(require("../../routers/superhero.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(superhero_router_1.default);
describe('Superhero endpoints', () => {
    test('POST /superhero validates input correctly', async () => {
        const invalidHero = {
            name: 'SupermanWithAVeryLongNameThatExceedsTwentyCharacters',
            superpower: 'NOT_A_REAL_POWER',
            humilityScore: 11
        };
        const response = await (0, supertest_1.default)(app)
            .post('/superhero')
            .send(invalidHero);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Name must be between 1 and 20 characters!'
        });
    });
});
