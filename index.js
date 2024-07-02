import express from 'express';
import RS from 'random-words-and-sentences';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/random-sentence', (req, res) => {
    const randomSentence = RS.getRandomSentence();
    res.json({ sentence: randomSentence });
});

app.post('/translate', (req, res) => {
    const inputText = req.body.text;
    const translatedText = inputText.toLowerCase().split(' ').map(inputTranslated => pigLatin(inputTranslated)).join(' ');
    res.json({ translatedText });
});

//pig-latin logic
function pigLatin(inputTranslated) {
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
