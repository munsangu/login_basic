const quotes = [
  {
    quote:"Success is walking from failure to failure with no loss of enthusiasm.",
    author:"Winston Churchill",
  },
  {
    quote:"All progress takes place outside the comfort zone.",
    author:"Michael John Bobak",
  },
  {
    quote:"The way to get started is to quit talking and begin doing.",
    author:"Walt Disney",
  },
  {
    quote:"Success seems to be connected with action. Successful people keep moving.",
    author:"Conrad Hilton",
  },
  {
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author:"Thomas Edison",
  },
  {
    quote:"The only thing worse than starting something and failing... is not starting something.",
    author:"seth Godin",
  },
  {
    quote:"Happiness is not something ready-made. It comes from your own actions.",
    author:"Dalai Lama",
  },
  {
    quote:"I like criticism. It makes you strong.",
    author:"LeBron James",
  },
  {
    quote:"That which does not kill us makes us stronger.",
    author:"Friedrich Nietzsche",
  },
  {
    quote:"A real friend is one who walks in when the rest of the world waks out.",
    author:"Walter Winchell",
  }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author