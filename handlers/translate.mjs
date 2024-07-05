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

// Pig Latin logic
// function pigLatin(inputTranslated) {
//     const vowels = ["a", "e", "i", "o", "u"];

//     if (vowels.includes(inputTranslated[0])) {
//         return inputTranslated + 'yay';
//     } else {
//         for (let i = 0; i < inputTranslated.length; i++) {
//             if (vowels.includes(inputTranslated[i])) {
//                 return inputTranslated.slice(i) + inputTranslated.slice(0, i) + 'ay';
//             }
//         }
//     }
// }
