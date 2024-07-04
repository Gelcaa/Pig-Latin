'use strict';

import RS from 'random-words-and-sentences';

export const generate = async (event) => {
    const randomSentence = RS.getRandomSentence();
    return {
        statusCode: 200,
        body: JSON.stringify({ sentence: randomSentence }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
