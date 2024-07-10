const { StatusCodes } = require("http-status-codes");
const { generate } = require("../handlers/randomSentence.js");

describe("randomSentence", () => {
  test("should return a random sentence", async () => {
    const result = await generate();

    expect(result.statusCode).toBe(StatusCodes.OK);
    expect(result.headers["Content-Type"]).toBe("application/json");
    expect(JSON.parse(result.body)).toHaveProperty("randomSentence");
  });
});
