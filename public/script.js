async function generateRandomPhrase() {
    try {
        const response = await fetch('/random-sentence');
        const data = await response.json();
        document.getElementById('englishInput').value = data.sentence;
    } catch (error) {
        console.error('Error fetching random phrase:', error);
    }
}

 async function translateText() {
            const inputText = document.getElementById('englishInput').value;
            try {
                const response = await fetch('/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: inputText }),
                });
                const data = await response.json();
                document.getElementById('translatedOutput').value = data.translatedText;
            } catch (error) {
                console.error('Error translating text:', error);
            }
}


