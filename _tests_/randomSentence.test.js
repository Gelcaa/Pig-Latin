const { StatusCodes } = require("http-status-codes");
const { generate } = require("../handlers/randomSentence.js");
const mockRS = require("random-words-and-sentences");

jest.mock("random-words-and-sentences");
mockRS.getRandomSentence = jest.fn();

describe("randomSentence", () => {
  test("should return a random sentence", async () => {
    const randomSentence = "test";
    mockRS.getRandomSentence.mockReturnValue(randomSentence);

    const result = await generate();

    expect(result.statusCode).toBe(StatusCodes.OK);
    expect(result.headers["Content-Type"]).toBe("application/json");
    expect(JSON.parse(result.body).randomSentence).toBe(randomSentence);
  });

  test("should return an error", async () => {
    mockRS.getRandomSentence.mockImplementation(() => {
      throw new Error("Error in generating a random sentence"); // naka variable dapat
    });

    const result = await generate();

    expect(result.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(JSON.parse(result.body).error).toBe(
      "Error in generating a random sentence"
    );
  });
});
