'use strict';

const RS = require('random-words-and-sentences');

module.exports.generate = async (event) => {
    const randomSentence = RS.getRandomSentence();
    return {
        statusCode: 200,
        body: JSON.stringify({ sentence: randomSentence }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
