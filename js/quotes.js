const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare, All's Well That Ends Well",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide, Autumn Leaves",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling, Harry Potter and the Chamber of Secrets 7",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = `-${todayQuote.author}`;
