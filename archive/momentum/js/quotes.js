const quotes = [
  {
    quote: 'Random Quote 1',
    author: 'Random Author 1',
  },
  {
    quote: 'Random Quote 2',
    author: 'Random Author 2',
  },
  {
    quote: 'Random Quote 3',
    author: 'Random Author 3',
  },
  {
    quote: 'Random Quote 4',
    author: 'Random Author 4',
  },
  {
    quote: 'Random Quote 5',
    author: 'Random Author 5',
  },
  {
    quote: 'Random Quote 6',
    author: 'Random Author 6',
  },
  {
    quote: 'Random Quote 7',
    author: 'Random Author 7',
  },
  {
    quote: 'Random Quote 8',
    author: 'Random Author 8',
  },
  {
    quote: 'Random Quote 9',
    author: 'Random Author 9',
  },
  {
    quote: 'Random Quote 10',
    author: 'Random Author 10',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
