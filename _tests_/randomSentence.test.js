import { randomSentence } from '../handlers/randomSentence.js';

describe("randomSentence", () => {
    test("should return a random sentence", async () => {
        const result = await randomSentence(event);

        expect(result.statusCode).toBe(200);
        expect(result.headers['Content-Type']).toBe('application/json');

        const body = JSON.parse(result.body);
        expect(body).toHaveProperty('sentence');
        expect(typeof body.sentence).toBe('string');
        expect(body.sentence.length).toBeGreaterThan(0);

    })
})