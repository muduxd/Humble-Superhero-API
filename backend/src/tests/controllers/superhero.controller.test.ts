import request from 'supertest';
import express from 'express';
import superheroRouter from '../../routers/superhero.router';

const app = express();
app.use(express.json());
app.use(superheroRouter);

describe('Superhero endpoints', () => {
    test('POST /superhero validates input correctly', async () => {
        const invalidHero = {
            name: 'SupermanWithAVeryLongNameThatExceedsTwentyCharacters',
            superpower: 'NOT_A_REAL_POWER',
            humilityScore: 11
        };

        const response = await request(app)
            .post('/superhero')
            .send(invalidHero);

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Name must be between 1 and 20 characters!'
        });
    });
}); 