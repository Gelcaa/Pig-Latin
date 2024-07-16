const { StatusCodes } = require("http-status-codes");
const { generate } = require("../handlers/translate.js");
const db = require("../db/db");

jest.mock("../db/db", () =>
  jest.fn().mockReturnValue({
    insert: jest.fn().mockResolvedValue(),
  })
);
describe("translate", () => {
  beforeEach(() => {
    db().insert.mockClear();
  });

  test("should return a translated text", async () => {
    const inputText = "testing";
    const translationText = "estingtay";
    const event = { body: JSON.stringify({ original_text: inputText }) };

    const result = await generate(event);

    expect(result.statusCode).toBe(StatusCodes.OK);
    expect(result.headers["Content-Type"]).toBe("application/json");
    expect(JSON.parse(result.body).translation_text).toBe(translationText);

    expect(db().insert).toHaveBeenCalledWith({
      original_text: inputText,
      translation_text: translationText,
    });
  });

  test("missing text", async () => {
    const event = { body: JSON.stringify({}) };

    const result = await generate(event);

    expect(result.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(result.body).toContain("Error in translating text");

    expect(db().insert).not.toHaveBeenCalled();
  });
});
