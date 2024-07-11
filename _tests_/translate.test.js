const { StatusCodes } = require("http-status-codes");
const { generate } = require("../handlers/translate.js");

describe("translate", () => {
  test("should return a translated text", async () => {
    const event = { body: JSON.stringify({ text: "testing" }) };

    const result = await generate(event);

    expect(result.statusCode).toBe(StatusCodes.OK);
    expect(result.headers["Content-Type"]).toBe("application/json");
    expect(JSON.parse(result.body).translatedText).toBe("estingtay");
  });

  test("missing text", async () => {
    const event = { body: JSON.stringify({}) };

    const result = await generate(event);

    expect(result.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(result.body).toContain("Error in translating text");
  });
});
