export function pigLatin(inputTranslated) {
    const vowels = ["a", "e", "i", "o", "u"];

    if (vowels.includes(inputTranslated[0])) {
        return inputTranslated + 'yay';
    } else {
        for (let i = 0; i < inputTranslated.length; i++) {
            if (vowels.includes(inputTranslated[i])) {
                return inputTranslated.slice(i) + inputTranslated.slice(0, i) + 'ay';
            }
        }
    }
}

