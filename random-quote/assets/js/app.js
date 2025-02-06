const randomButton = document.getElementById('randomButton');
const shareButton = document.getElementById('shareButton');

const quoteAuthorElement = document.getElementById('quoteAuthor');
const quoteTagsElement = document.getElementById('quoteTags');
const quoteTextElement = document.getElementById('quoteText');

const defaultAuthor = 'George Bernard Shaw';
const defaultText = 'Learn from yesterday, live for today, hope for tomorrow.';
const defaultTags = ['Famous Quotes', 'Inspirational'];

window.onload = function () {
    function getRandomQuote() {
        fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json')
            .then(response => response.json())
            .then(data => {
                let randomIndex = Math.floor(Math.random() * data.length);
                let randomQuote = data[randomIndex];
                let quoteText = randomQuote.quote;
                let quoteAuthor = randomQuote.author;
                let quoteTags = randomQuote.tags;
                
                updateQuote(quoteAuthor, quoteText, quoteTags);
            })
            .catch(error => {
                console.error(error)
                console.log('Error fetching data, setting default quote');
                updateQuote(defaultAuthor, defaultText, defaultTags);
            });
    }

    function updateQuote(author, text, tags) {
        quoteAuthorElement.textContent = author;
        quoteTextElement.textContent = text;

        quoteTagsElement.innerHTML = '';
        tags.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element;
            quoteTagsElement.appendChild(li);
        });
    }

    randomButton.addEventListener('click', getRandomQuote);
    // shareButton.addEventListener('click', shareQuote);
}