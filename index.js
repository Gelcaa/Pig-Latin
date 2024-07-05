import express from 'express';
import RS from 'random-words-and-sentences';
import { dirname } from "path";
import { fileURLToPath } from "url";
import { pigLatin } from './pigLatin.js';


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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
