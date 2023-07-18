const quotes = [
  {
    quote: "Think like a man of action and act like man of thought.",
    author: "Iron Man",
  },
  {
    quote:
      "Courage is very important. Like a muscle, it is strengthened by use.",
    author: "Super Man",
  },

  {
    quote:
      "Life is the art of drawing sufficient conclusions from insufficient premises.",
    author: "Bat Man",
  },
  { quote: "By doubting we come at the truth.", author: "Beenzino" },

  {
    quote:
      "A man that hath no virtue in himself, ever envieth virtue in others.",
    author: "Captain",
  },

  { quote: "When money speaks, the truth keeps silent.", author: "The Quiet" },

  {
    quote: "Better the last smile than the first laughter.",
    author: "Pisick",
  },

  {
    quote:
      "In the morning of life, work; in the midday, give counsel; in the evening, pray.",
    author: "Wassup Man",
  },

  {
    quote: "Painless poverty is better than embittered wealth.",
    author: "Jay Park",
  },

  { quote: "A poet is the painter of the soul.", author: "Ph-1" },

  {
    quote: "Error is the discipline through which we advance.",
    author: "Owen",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
