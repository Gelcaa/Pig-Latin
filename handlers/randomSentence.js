"use strict";

const { StatusCodes } = require("http-status-codes");
const RS = require("random-words-and-sentences");

module.exports.generate = async () => {
  try {
    const randomSentence = RS.getRandomSentence();
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify({ randomSentence }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      body: JSON.stringify({ error: "Error in generating a random sentence" }),
    };
  }
};
