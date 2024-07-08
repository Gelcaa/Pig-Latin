import { pigLatin } from '../pigLatin.js';

export const generate = async (event) => {
    const inputText = JSON.parse(event.body).text;
    const translatedText = inputText.toLowerCase().split(' ').map(inputTranslated => pigLatin(inputTranslated)).join(' ');

    return {
        statusCode: 200,
        body: JSON.stringify({ translatedText }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};