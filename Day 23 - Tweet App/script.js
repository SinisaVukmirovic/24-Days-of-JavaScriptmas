const app = document.querySelector('.app');
const tweetTextArea = app.querySelector('#tweetTextArea');
const counter = app.querySelector('#counter');
const charsLeft = app.querySelector('#charsLeft');
const tweetBtn = app.querySelector('#tweetBtn');
const maxChars = 140;   

const charsRemaining = () => {
    const charsRemaining = maxChars - tweetTextArea.value.length;

    if (charsRemaining <= 0) {
        counter.innerText = `Characters left: ${charsRemaining} / ${maxChars}`;
        tweetTextArea.blur();
        tweetBtn.disabled = true;
    } else if (charsRemaining <= 20) {
        counter.style.color = 'crimson';
        counter.innerText = `Characters left: ${charsRemaining} / ${maxChars}`;
    } else {
        counter.style.color = 'var(--theme-clr)';
        counter.innerText = `Characters left: ${charsRemaining} / ${maxChars}`;
    }
};

const tweetOut = () => {
    const typedTweet = tweetTextArea.value;
    const tweetOutLink = app.querySelector('#tweetOutLink');
    const tweeterUrl = 'https://twitter.com/intent/tweet?text=';

    tweetOutLink.setAttribute('href', `${tweeterUrl}${typedTweet}`);
};

tweetTextArea.addEventListener('input', charsRemaining);
tweetBtn.addEventListener('click', tweetOut);