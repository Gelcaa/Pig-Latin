const { StatusCodes } = require("http-status-codes");
const { pigLatin } = require("../pigLatin");
const db = require("../db/db");

module.exports.generate = async (event) => {
  try {
    const inputText = JSON.parse(event.body).text;
    const translatedText = inputText
      .toLowerCase()
      .split(" ")
      .map((inputTranslated) => pigLatin(inputTranslated))
      .join(" ");

    await db("translations").insert({
      original_text: inputText,
      translation_text: translatedText,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ translatedText }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      body: JSON.stringify({ error: "Error in translating text" }),
    };
  }
};
