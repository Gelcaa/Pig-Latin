const { StatusCodes } = require('http-status-codes');
const { pigLatin } = require('../pigLatin');

module.exports.generate = async (event) => {
    try {
        const inputText = JSON.parse(event.body).text;
        const translatedText = inputText.toLowerCase().split(' ').map(inputTranslated => pigLatin(inputTranslated)).join(' ');

        return {
            statusCode: 200,
            body: JSON.stringify({ translatedText }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    catch (error) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            body : JSON.stringify({ error: 'Error in translating text'})
        }
    }
};
