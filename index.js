// store all quotes in an Array
const generateQuote = function() {
    const quotes = [
    {author: "Terry Pratchett", 
    quote: "The first draft is just you telling yourself the story."},

    {author: "Lisa See",
    quote: "Read a thousand books, and your words will flow like a river."},

    {author: "Jodi Picoult",
    quote: "You can always edit a bad page. You can’t edit a blank page."},

    {author: "Maya Angelou",
    quote: "There is no greater agony than bearing an untold story inside you."}
]
const arrayIndex = Math.floor(Math.random() * quotes.length);

document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
document.getElementById("quoteAuthor").innerHTML = quotes[arrayIndex].author;
}
window.onload = function() {
    generateQuote();
    document.getElementById("quoteBtn").addEventListener('click', generateQuote);
}